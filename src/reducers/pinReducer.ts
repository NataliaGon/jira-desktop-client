import { TO_PIN} from "../components/draggable-box/issue.constants";

const initialState = {
  pin:[]
};

export default function pinReducer(state = initialState , {type, data}) {
  return{ pin:data }
}