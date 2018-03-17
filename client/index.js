import React from 'react';
import ReactDOM, {render} from 'react-dom';
import ApolloClient from 'apollo-client'
import {ApolloProvider} from 'react-apollo';
import SongList from './components/SongList'

const client = new ApolloClient({})
const Root = () => {
  return (
  <ApolloProvider client={client}>
   <div>
    <SongList />
   </div>
   </ApolloProvider>
  )
};

render(
  <Root />,
  document.querySelector('#root')
);
