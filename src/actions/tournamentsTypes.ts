export const GET_TOURNAMENTS_START = 'GET_TOURNAMENTS_START';
export const GET_TOURNAMENTS_SUCCESS = 'GET_TOURNAMENTS_SUCCESS';
export const GET_TOURNAMENTS_ERROR = 'GET_TOURNAMENTS_ERROR';

export type CardType = {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: {
    current: number;
    max: number;
  };
  startDate: string;
};

export interface TournamentsStart {
  type: typeof GET_TOURNAMENTS_START;
}

export interface TournamentsError {
  type: typeof GET_TOURNAMENTS_ERROR;
  payload: string;
}

export interface TournamentsSuccess {
  type: typeof GET_TOURNAMENTS_SUCCESS;
  payload: CardType;
}

export type TournamentsDispatchTypes =
  | TournamentsStart
  | TournamentsSuccess
  | TournamentsError;
