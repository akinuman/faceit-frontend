import {
  CardType,
  GET_TOURNAMENTS_ERROR,
  GET_TOURNAMENTS_START,
  GET_TOURNAMENTS_SUCCESS,
  TournamentsDispatchTypes
} from '../actions/tournamentsTypes';
export interface IInitialState {
  isLoading: boolean;
  tournaments?: CardType[];
  message?: string;
}

const initialState: IInitialState = {
  isLoading: false,
  message: ''
};

const tournaments = (
  state: IInitialState = initialState,
  action: TournamentsDispatchTypes
) => {
  switch (action.type) {
    case GET_TOURNAMENTS_ERROR:
      return {
        isLoading: false,
        message: action.payload
      };
    case GET_TOURNAMENTS_START:
      return {
        isLoading: true
      };
    case GET_TOURNAMENTS_SUCCESS:
      return {
        isLoading: false,
        tournaments: action.payload
      };
    default:
      return state;
  }
};

export default tournaments;
