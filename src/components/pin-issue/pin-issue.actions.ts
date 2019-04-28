import {DELETE_PIN} from "./pin-issue.constants";

export function deletePin(data:any) {
 console.log(data);
  return {
    type: DELETE_PIN,
    data
  };
}