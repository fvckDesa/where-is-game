export function includeAt(email) {
  return email.includes("@") || "Email must include @";
}

export function includePoint(email) {
  return email.includes(".") || "Email must include .";
}

export function validEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) || "Email not valid";
}

export const emailValidation = {
  includeAt,
  includePoint,
  validEmail,
};

export function getSignInErrorMessage(message) {
  const code = message.match(/\((.+)\)/)[1];
  switch (code) {
    case "auth/invalid-email":
      return "Email not valid";
    case "auth/user-disabled":
      return "User disabled";
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "Wrong email or password";
    default:
      return "Oops, there was an error";
  }
}

export function includeNumber(password) {
  return /[0-9]/.test(password) || "Password must include at least one number";
}

export function includeUppercase(password) {
  return (
    /[A-Z]/.test(password) ||
    "Password must include at least one uppercase character"
  );
}
