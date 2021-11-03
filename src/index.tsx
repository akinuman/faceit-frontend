import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
//Style
import GlobalStyle from './GlobalStyle';
import { Container } from './styles/HomeStyle';
import { Content } from './styles/HomeStyle';
import { SearchSection } from './styles/HomeStyle';
import { FetchSection } from './styles/HomeStyle';
//Components
import H4 from './components/H4';
import Input from './components/Input';
import Button from './components/Button';
import TournamentCard from './components/TournamentCard';
import Failed from './components/Retry';
const App = () => {
  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <SearchSection>
        <Input placeholder="Search Tournament..." />
        <Button>Create Tournament</Button>
      </SearchSection>
      <FetchSection>
        <Failed />
      </FetchSection>
      <Content>
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
      </Content>
    </Container>
  );
};
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
