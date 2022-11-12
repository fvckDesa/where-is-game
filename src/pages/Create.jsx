// hooks
import { useGameImage } from "@src/hooks/useGameImage";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@src/contexts/UserProvider";
// firebase
import { createGame, addCharacter } from "@database/games";
import { userCreateGame } from "@database/users";
// components
import {
  GameImage,
  SelectedPoint,
  CreateCharacter,
  CreateField,
  DropImage,
  PopUp,
} from "@src/components";
// hoc
import withAuth from "@src/hoc/withAuth";
// assets
import Image from "@src/assets/Image.svg";
import ImageIllustration from "@src/assets/imageIllustration.svg";

const defaultCharacter = {
  name: "",
  coords: { x: null, y: null },
  image: { file: null, url: "" },
};

function Create() {
  const { user } = useUserContext();
  const [formError, setFormError] = useState({
    message: "Error",
    type: "",
    isLunching: null,
  });
  const [numCharacter, setNumCharacter] = useState(0);
  const [characters, setCharacters] = useState(
    new Array(3).fill({ ...defaultCharacter })
  );
  const [image, setImage] = useState({ file: null, url: "" });
  const inputRef = useRef();
  const [name, setName] = useState("");
  const { x, y, setCoords, containerRef, imageRef } = useGameImage(
    characters[numCharacter]
  );
  const navigate = useNavigate();

  useEffect(() => {
    return () => URL.revokeObjectURL(image.url);
  }, [image.file]);

  useEffect(() => {
    setFormError((prev) => ({ ...prev, type: "", isLunching: null }));
  }, [image.file, name, characters]);

  function handlerOpen() {
    inputRef.current.click();
  }

  function handlerFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    setImage({
      file,
      url: URL.createObjectURL(file),
    });
  }

  function handlerClick(coords) {
    if (numCharacter != null && image.url) {
      setCharacters((prev) =>
        prev.map((character, i) => {
          if (i !== numCharacter) return character;
          return { ...character, coords };
        })
      );
      setCoords(coords);
    }
  }

  function handlerResize(newCoords) {
    setCoords(newCoords);
  }

  function handlerCharacterChange(numCharacter) {
    return function (attributes) {
      setCharacters((prev) =>
        prev.map((character, i) => {
          if (i !== numCharacter) return character;
          return { ...character, ...attributes };
        })
      );
    };
  }

  function handlerSelect(numCharacter) {
    return function (coords) {
      setNumCharacter(numCharacter);
      setCoords(coords);
    };
  }

  function checkError() {
    let newError = null;
    // game image
    if (!image.file) {
      newError = { type: "image", message: "Add a game image" };
      // game name
    } else if (!name) {
      newError = {
        type: "name",
        message: "Add a name for your game",
      };
      // characters
    } else {
      for (const i in characters) {
        const numCharacter = i == 0 ? "first" : i == 1 ? "second" : "third";
        const { name, image, coords } = characters[i];
        if (!name) {
          newError = {
            type: `character${i}`,
            message: `Add a name for ${numCharacter} character`,
          };
          break;
        } else if (!image.file) {
          newError = {
            type: `character${i}`,
            message: `Add an image for ${numCharacter} character`,
          };
          break;
        } else if (!coords.x || !coords.y) {
          newError = {
            type: `character${i}`,
            message: `Set position of ${numCharacter} character in image`,
          };
          break;
        }
      }
    }

    if (newError) {
      setFormError({ ...newError, isLunching: true });
      return true;
    }

    return false;
  }

  async function handlerSubmit(e) {
    e.preventDefault();

    const isError = checkError();

    if (isError) return;

    const gameId = await createGame({
      name,
      image: image.file,
    });

    const width = imageRef.current.scrollWidth;
    const height = imageRef.current.scrollHeight;

    await Promise.all(
      characters.map(({ name, image, coords }) =>
        addCharacter(
          {
            name,
            image: image.file,
            coords: { x: coords.x / width, y: coords.y / height },
          },
          gameId
        )
      )
    );

    await userCreateGame(user.id, gameId);

    navigate("/");
  }

  function handlerDrop(file) {
    setImage({
      file,
      url: URL.createObjectURL(file),
    });
  }

  return (
    <div className="h-[90%] p-10 pt-4 flex justify-center gap-4">
      <DropImage
        className="flex-[0.8] relative"
        dragOverClass="dragOver"
        onDrop={handlerDrop}
      >
        <PopUp
          className="bg-red-600"
          active={formError?.isLunching}
          message={formError.message}
          onClose={() =>
            setFormError((prev) => ({ ...prev, isLunching: null }))
          }
          ms={3000}
        />
        <div
          ref={containerRef}
          className="h-full w-full overflow-y-scroll overflow-x-hidden relative z-0"
        >
          {image.url ? (
            <GameImage
              ref={imageRef}
              image={image.url}
              containerRef={containerRef}
              x={x}
              y={y}
              onClick={handlerClick}
              onResize={handlerResize}
            >
              {x && y && <SelectedPoint x={x} y={y} />}
            </GameImage>
          ) : (
            <div
              className="flex flex-col justify-center items-center w-full h-full cursor-pointer group"
              onClick={handlerOpen}
            >
              <div className="drop w-1/2 p-10 border-4 border-transparent border-dashed rounded-xl group-hover:border-white">
                <img
                  className="mb-4"
                  src={ImageIllustration}
                  alt="illustration with images folder"
                />
                <p className="text-center font-semibold text-2xl text-tiber-500">
                  Select or drop an image that it contains your characters
                </p>
              </div>
            </div>
          )}
        </div>
      </DropImage>
      <form
        className="flex-[0.2] flex flex-col gap-4 text-white bg-tiber-500 rounded-xl p-4"
        onSubmit={handlerSubmit}
      >
        <CreateField label={"Game Image"}>
          <div
            className={`flex items-center gap-4 px-2 py-1 rounded border-2 ${
              formError.type === "image"
                ? "border-red-600"
                : "border-transparent"
            } transition-all duration-300 cursor-pointer hover:bg-[hsla(0,0%,100%,0.2)]`}
            onClick={handlerOpen}
          >
            <input
              ref={inputRef}
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handlerFile}
            />
            <img src={Image} alt="Image icon" />
            <span>{image.file?.name ?? "Chose image"}</span>
          </div>
        </CreateField>
        <CreateField label={"Game name"}>
          <input
            className={`text-tiber-500 p-1 rounded border-2 ${
              formError.type === "name" ? "border-red-600" : ""
            }`}
            placeholder="Name..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </CreateField>
        <CreateField label={"Characters"}>
          <ul className="flex flex-col gap-3">
            {characters.map((character, i) => (
              <CreateCharacter
                key={i}
                character={character}
                isSelected={numCharacter === i}
                onChange={handlerCharacterChange(i)}
                onSelect={handlerSelect(i)}
                hasError={formError.type === `character${i}`}
              />
            ))}
          </ul>
        </CreateField>
        <button className="mt-auto" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default withAuth(Create);
