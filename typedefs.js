const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getAllLeagues: Leagues
    getLeagueDetails(leagueId: String): LeagueDetail
    getSeasonDetails(leagueId: String): Seasons
    getSeasonStanding(seasonInput: SeasonRequest): SeasonStanding
  }

  input SeasonRequest {
    leagueId: String
    season: String
    sort: String
  }

  type Leagues {
    status : Boolean
    data : [League]
  }

  type Seasons {
    status : Boolean
    data : SeasonDetails
  }

  type SeasonStanding {
    status : Boolean
    data : SeasonStangingDetails
  }

  type SeasonStangingDetails{
    name: String
    abbreviation: String
    seasonDisplay: String
    season: String
    standings: [Standing]
  }

  type Standing{
    team: Team
    note: Note
    stats: [Stats]
  }

  type Team{
    id: String
    location: String
    name: String
    abbreviation: String
    displayName: String
    shortDisplayName: String
    isActive: Boolean
  }

  type Note{
    description: String
    rank: Int
    color: String
  }

  type Stats{
    name: String
    displayName: String
    shortDisplayName: String
    description: String
    abbreviation: String
    type: String
    value: String
    displayValue: String
  }

  type SeasonDetails {
    name: String
    desc: String
    abbreviation: String
    seasons: [Season]
  }

  type Season {
    year: Int
    startDate: String
    endDate: String
    displayName: String
  }

  type LeagueDetail {
    status : Boolean
    data : League
  }

  type League {
    status : Boolean
    id: String 
    name: String  
    abbr: String 
    logos : Logos
  }
  type Logos {
    light: String 
    dark: String 
  }
`;

module.exports = typeDefs;