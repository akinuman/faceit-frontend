import React from 'react';
//Style
import { CardContainer } from '../styles/HomeStyle';
//Components
import Button from './Button';
import H6 from './H6';
import P from './P';

const TournamentCard = () => {
  return (
    <CardContainer>
      <H6>Tournament Name</H6>
      <P>Organizer:</P>
      <P>Game:</P>
      <P>Participants:</P>
      <P>Start:</P>
      <div className="button_container">
        <Button>EDIT</Button>
        <Button leftMargin={10}>DELETE</Button>
      </div>
    </CardContainer>
  );
};

export default TournamentCard;
