import {TO_PIN} from "./issue.constants";

export function toPin(data:any) {

  return {
    type: TO_PIN,
    data
  };
}
