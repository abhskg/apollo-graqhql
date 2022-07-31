const { ApolloServer } = require('apollo-server');
const { gql } = require('apollo-server');
const leagueService= require('./leagueService')
const typeDefs= require('./typedefs')
var axios = require('axios');

const resolvers = {
    Query: {
        getAllLeagues: leagueService.getAllLeagues,
        getLeagueDetails: leagueService.getLeagueDetails,
        getSeasonDetails: leagueService.getSeasonDetails,        
        getSeasonStanding: leagueService.getSeasonStanding,
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    context: ({ req }) => {
      return {
        headers: req.headers
      }
    }
  });
  
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });




