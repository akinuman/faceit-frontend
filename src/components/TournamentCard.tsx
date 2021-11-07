import axios from 'axios';
import moment from 'moment';
import React from 'react';
import { toast } from 'react-toastify';
import { API_TOURNAMENTS_URL } from '../constants/api';
//Style
import { CardContainer } from '../styles/HomeStyle';
//Components
import Button from './Button';
import H6 from './H6';
import P from './P';
//Types
import { CardType } from '../actions/tournamentsTypes';

const TournamentCard = ({
  item,
  fetchTournaments
}: {
  item: CardType;
  fetchTournaments: (filter: string) => void;
}) => {
  const editTournament = async (id: string) => {
    let name = window.prompt('New Tournament Name:', '');
    if (name?.length === 0) toast.warning('You need to write name to input');
    else
      try {
        const response = await axios.put(`${API_TOURNAMENTS_URL}/${id}`, {
          ...item,
          name: name
        });
        if (response.data) fetchTournaments('');
        toast.success('You succesfully update name');
      } catch {
        toast.warning('Something got wrong');
      }
  };
  const deleteTournament = async (id: string) => {
    let answer = window.confirm(
      'Do you really want to delete this tournament?'
    );
    if (answer)
      try {
        const response = await axios.delete(`${API_TOURNAMENTS_URL}/${id}`);
        if (response.data) fetchTournaments('');
        toast.success('You successfully delete data');
      } catch {
        toast.warning('Something got wrong');
      }
  };

  return (
    <CardContainer>
      <H6>{item.name}</H6>
      <P>Organizer: {item.organizer}</P>
      <P>Game: {item.game}</P>
      <P>
        Participants: {`${item.participants.current}/${item.participants.max}`}
      </P>
      <P>Start: {moment(item.startDate).format('YYYY/MM/DD, HH:mm:ss')}</P>
      <div className="button_container">
        <Button onClick={() => editTournament(item.id)}>EDIT</Button>
        <Button onClick={() => deleteTournament(item.id)} leftMargin={10}>
          DELETE
        </Button>
      </div>
    </CardContainer>
  );
};

export default TournamentCard;
