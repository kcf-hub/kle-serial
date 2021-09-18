import { deserialize } from "./deserialize";
import { Keyboard } from "./interfaces";
import { serialize } from "./serialize";

export { deserialize } from "./deserialize";
export {
  Key as KleKey,
  Keyboard as KleKeyboard,
  KeyboardMetadata as KleKeyboardMetadata
} from "./interfaces";
export { serialize } from "./serialize";

export function parse(json: string): Keyboard {
  return deserialize(JSON.parse(json));
}
export function stringify(keyboard: Keyboard): string {
  return JSON.stringify(serialize(keyboard));
}
