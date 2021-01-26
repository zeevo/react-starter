import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { defaultAction } from './actions';

import logo from '../../assets/logo.svg';
import Code from '../../components/Code';

const Container = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: App-logo-spin infinite 20s linear;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Link = styled.a`
  color: #61dafb;
`;

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  dispatch(defaultAction());

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>containers/src/App.tsx</code> and save to reload.
        </p>
        <p>
          Redux store: <Code {...store} />
        </p>
        <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </Link>
        <Link
          href="https://react-redux.js.org/next/api/hooks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Redux (with Hooks)
        </Link>
      </Header>
    </Container>
  );
}

export default App;
