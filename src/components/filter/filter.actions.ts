import {FILTER} from "./filter.constants";

export function filter(data:any) {
  return {
    type: FILTER,
    data
  };
}