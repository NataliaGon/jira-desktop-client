import {TO_PIN} from "./issue.constants";

export function toPin(data:any) {
  const issue = data.props;
  return {
    type: TO_PIN,
    issue
  };
}
