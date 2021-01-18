import { CardActions, CardActionTypes } from "./actions";
import { ICard } from "src/app/modules/core/models/card.model";

export interface ICardState {
  data: ICard[];
  isLoading: boolean;
  message: string;
}

const initialState: ICardState = {
  data: [],
  isLoading: false,
  message: "",
};

export function reducer(state = initialState, action: CardActions): ICardState {
  switch (action.type) {
    case CardActionTypes.GetCardLoad: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case CardActionTypes.GetCardSuccess: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        message: "Data fetch Successfully!",
      };
    }
    case CardActionTypes.GetCardFail: {
      return {
        data: [],
        isLoading: false,
        message: "Something went wrong!",
      };
    }
    case CardActionTypes.PostCard: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case CardActionTypes.PostCardSuccess: {
      const updatedData = [...state["data"]];
      updatedData.push(action.payload); // as i am using testing api, I have                                pushed the data to change the state. For real apis, there is no need to. You can simply return the data.
      return {
        ...state,
        data: updatedData,
        isLoading: false,
        message: "Data posted Successfully!",
      };
    }
    case CardActionTypes.PostCardFail: {
      return {
        data: [],
        isLoading: false,
        message: "Something went wrong!",
      };
    }
    default:
      return state;
  }
}
