import React from 'react';
//Style
import { FailedContainer } from '../styles/HomeStyle';
//Components
import P from './P';
import Button from './Button';

interface IProps {
  filtered: string;
  fetchTournaments: (filtered: string) => void;
}

const Failed = ({ fetchTournaments, filtered }: IProps) => {
  return (
    <FailedContainer>
      <P>Something went wrong.</P>
      <Button onClick={() => fetchTournaments(filtered)} topMargin={8}>
        Retry
      </Button>
    </FailedContainer>
  );
};
export default Failed;
