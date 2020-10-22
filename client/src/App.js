import React from 'react';
// APOLLO PROVIDER WILL PROVIDE DATA TO AL OF THE OTHER COMPONENTS
import {ApolloProvider} from '@apollo/react-hooks';
// APOLLO CLIENT WILL GET THAT DATA
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// ESTABLISH CONNECTION TO THE BACK-END SERVERS ENDPOINT
const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client = {client}>
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
