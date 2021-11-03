import styled from 'styled-components';
import theme from './../theme';

export const CardContainer = styled.div`
  background: ${theme.palette.background.base};
  border-radius: 4px;
  display: flex;
  padding: 12px;
  flex-direction: column;
  min-width: 280px;
  .button_container {
    display: flex;
    margin-top: 4px;
  }
`;
export const Container = styled.div`
  max-width: 960px;
  margin-top: ${theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Content = styled.div`
  display: inline-flex;
  margin-top: 24px;
  flex-wrap: wrap;
  gap: 24px;
`;
export const FetchSection = styled.div`
  display: flex;
  justify-content: center;
`;
export const FailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
