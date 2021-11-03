import React from 'react';
//Style
import { FailedContainer } from '../styles/HomeStyle';
//Components
import P from './P';
import Button from './Button';

const Failed = () => {
  return (
    <FailedContainer>
      <P>Something went wrong.</P>
      <Button topMargin={8}>Retry</Button>
    </FailedContainer>
  );
};
export default Failed;
