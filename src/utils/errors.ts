export class InputError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "InputError";
  }
}

export function isInputError(e: unknown): e is InputError {
  return e instanceof InputError;
}
