import {DELETE_PIN} from "./pin-issue.constants";

export function deletePin(data:any) {
  return {
    type: DELETE_PIN,
    data
  };
}