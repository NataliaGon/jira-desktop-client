import {TO_PIN} from "./issue.constants";

export function toPin(data:any) {
  console.log(data.props);
  const issue = data.props;
  return {
    type: TO_PIN,
    data
  };
}
