import { TO_PIN} from "./issue.constants";

export function toPin(data) {
  return {
    type: TO_PIN,
    data
  };
}
