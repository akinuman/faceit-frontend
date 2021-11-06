import axios from 'axios';
import { Dispatch } from 'redux';
import { API_TOURNAMENTS_URL } from '../constants/api';
import {
  CardType,
  GET_TOURNAMENTS_ERROR,
  GET_TOURNAMENTS_START,
  GET_TOURNAMENTS_SUCCESS,
  TournamentsDispatchTypes
} from './tournamentsTypes';

export const getTournaments = (filtered: string) => async (
  dispatch: Dispatch<TournamentsDispatchTypes>
) => {
  try {
    dispatch({
      type: GET_TOURNAMENTS_START
    });
    const res = await axios.get(API_TOURNAMENTS_URL);
    let filteredValues = res.data.filter((card: CardType) => {
      return (
        card.name.toLowerCase().includes(filtered) ||
        card.organizer.toLowerCase().includes(filtered) ||
        card.game.toLowerCase().includes(filtered)
      );
    });
    dispatch({
      type: GET_TOURNAMENTS_SUCCESS,
      payload: filteredValues
    });
  } catch {
    dispatch({
      type: GET_TOURNAMENTS_ERROR,
      payload: 'Error Message'
    });
  }
};
