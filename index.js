const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Employee {
    name: String
    designation: String
  }
  type Query {
    employee: [Employee]
  }
`;

const employee = [
    {
      name: 'Josh Smith',
      designation: 'Sales Head',
    },
    {
      name: 'Sundar Patel',
      designation: 'IT Operations',
    },,
    {
      name: 'Ricardo García ',
      designation: 'Financial Approver',
    },,
    {
      name: 'Roger Walker',
      designation: 'Junior Developer',
    },
  ];
  
const resolvers = {
    Query: {
        employee: () => employee,
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
  });
  
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });




