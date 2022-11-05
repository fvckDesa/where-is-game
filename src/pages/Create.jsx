import GameImage from "@components/GameImage";
import SelectedPoint from "@components/SelectedPoint";
import CreateCharacter from "@src/components/CreateCharacter";
import CreateField from "@src/components/CreateField";
import { useGameImage } from "@src/hooks/useGameImage";
import { useEffect, useRef, useState } from "react";
import Image from "@assets/Image.svg";
import { createGame, addCharacter } from "@appFirebase/database";
import DropImage from "@src/components/DropImage";
import ImageIllustration from "@assets/imageIllustration.svg";
import { useNavigate } from "react-router-dom";

const defaultCharacter = {
  name: "",
  coords: { x: null, y: null },
  image: { file: null, url: "" },
};

function Create() {
  const [formError, setFormError] = useState();
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
    setFormError(null);
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

  async function handlerSubmit(e) {
    e.preventDefault();

    if (!image.file) return setFormError("image");
    if (!name) return setFormError("name");
    for (const i in characters) {
      const { name, image, coords } = characters[i];
      if (!name || !image.file || coords.x == null || coords.y == null)
        return setFormError(`character${i}`);
    }

    const gameId = await createGame({
      name,
      image: image.file,
    });

    for (const { name, image, coords } of characters) {
      const width = imageRef.current.scrollWidth;
      const height = imageRef.current.scrollHeight;
      await addCharacter(
        {
          name,
          image: image.file,
          coords: { x: coords.x / width, y: coords.y / height },
        },
        gameId
      );
    }

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
        className="flex-[0.8]"
        dragOverClass="dragOver"
        onDrop={handlerDrop}
      >
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
            <img
              className="drop w-1/2 aspect-square p-10 border-4 border-transparent border-dashed rounded-xl"
              src={ImageIllustration}
              alt="illustration with images folder"
            />
          )}
        </div>
      </DropImage>
      <form
        className="flex-[0.2] flex flex-col gap-4 text-white bg-tiber rounded-xl p-4"
        onSubmit={handlerSubmit}
      >
        <CreateField label={"Game Image"}>
          <div
            className={`flex items-center gap-4 px-2 py-1 rounded border-2 border-transparent ${
              formError === "image" ? "border-red-600" : ""
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
            className={`text-tiber p-1 rounded border-2 ${
              formError === "name" ? "border-red-600" : ""
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
                error={formError === `character${i}`}
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

export default Create;
