import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider, client } from './apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);