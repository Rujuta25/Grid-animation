import { ApolloClient, createNetworkInterface } from 'apollo-client';

// Paste your endpoint for the Simple API here.
// Info: https://github.com/graphcool-examples/angular-apollo-instagram-example#2-create-graphql-api-with-graphcool
//const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj7wkvnfx0hwf0145ltn32czp' })

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj7wkx2470grw01689ssnkg2c' })
const client = new ApolloClient({ networkInterface });

export function provideClient(): ApolloClient {
  return client;
}