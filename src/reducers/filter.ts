import { FILTER } from "../components/filter/filter.constants";

const initialState = {
    filter: ''
};

export default function pinReducer(state = initialState, action?: any) {

    switch (action.type) {
        case FILTER:
            return {filter: action.data}
        default:
            return state;
    }
}