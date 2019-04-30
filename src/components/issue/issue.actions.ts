import {TO_PIN} from "./issue.constants";

export function toPin(data:any) {
  alert('have pin')
  const issue = data.props;
  return {
    type: TO_PIN,
    issue
  };
}
