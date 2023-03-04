import email_illustration from "@src/assets/email-illustration.svg";

export function getActionName(mode) {
  switch (mode) {
    case "verifyEmail":
      return "email verification";
    default:
      throw new Error(`Action ${mode} not found`);
  }
}

export function getResultText(mode, result) {
  switch (mode) {
    case "verifyEmail":
      return result
        ? "Your Email is successfully verified"
        : "Your Email is not verified";
    default:
      throw new Error(`Action ${mode} not found`);
  }
}

export function getIllustration(mode) {
  switch (mode) {
    case "verifyEmail":
      return email_illustration;
    default:
      throw new Error(`Action ${mode} not found`);
  }
}
