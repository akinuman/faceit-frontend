import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTournaments } from './actions/tournaments';
import { API_TOURNAMENTS_URL } from './constants/api';
import { toast } from 'react-toastify';
import axios from 'axios';
//Style
import { Container } from './styles/HomeStyle';
import { Content } from './styles/HomeStyle';
import { SearchSection } from './styles/HomeStyle';
import { FetchSection } from './styles/HomeStyle';
//Components
import H4 from './components/H4';
import Input from './components/Input';
import Button from './components/Button';
import TournamentCard from './components/TournamentCard';
import Failed from './components/Failed';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
//Types
import { CardType } from './actions/tournamentsTypes';

interface ITournaments {
  tournaments: {
    message: string;
    isLoading: string;
    tournaments: CardType[];
  };
}

const App = () => {
  const tournamentsState = useSelector(
    (state: ITournaments) => state.tournaments
  );
  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState('');
  const fetchTournaments = (filtered: string) => {
    dispatch(getTournaments(filtered));
  };
  useEffect(() => {
    fetchTournaments(filtered);
  }, [filtered]);
  const tournamentMap = () => {
    return (
      <>
        {tournamentsState?.tournaments?.map((item: CardType, kI: number) => (
          <TournamentCard
            fetchTournaments={fetchTournaments}
            key={kI}
            item={item}
          ></TournamentCard>
        ))}
      </>
    );
  };
  const createTournament = async () => {
    let name = window.prompt('Tournament Name:', '');
    if (name?.length === 0) toast.warning('You need to write name to input');
    else
      try {
        const response = await axios.post(API_TOURNAMENTS_URL, { name });
        if (response.data) fetchTournaments(filtered);
        toast.success('You created tournament');
      } catch (err) {
        console.log(err);
      }
  };
  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <SearchSection>
        <Input
          onChange={e => setFiltered(e.target.value)}
          placeholder="Search Tournament..."
        />
        <Button onClick={() => createTournament()}>Create Tournament</Button>
      </SearchSection>
      <FetchSection>
        {tournamentsState.isLoading ? <Loading /> : null}
        {tournamentsState.message ? (
          <Failed fetchTournaments={fetchTournaments} filtered={filtered} />
        ) : null}
        {tournamentsState.tournaments?.length === 0 ? <NotFound /> : null}
      </FetchSection>
      <Content>{tournamentMap()}</Content>
    </Container>
  );
};

export default App;
