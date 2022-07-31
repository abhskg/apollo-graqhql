var axios = require('axios');

var errorResponse = {
  status: false
};

const getAllLeagues = function getAllLeagues() {
  const reqUrl = 'https://api-football-standings.azharimm.site/leagues';
  console.log(`calling api at path: ${reqUrl}`);
  const data = axios.get(reqUrl).then(
    response => {
      console.log('response data:' + JSON.stringify(response.data));
      return response.data;
    },
    error => {
      console.log('API Error during axios call :', error);
      return errorResponse;
    }
  );
  return data;
};

const getLeagueDetails = function getLeagueDetails(context, args) {
  const reqUrl = `https://api-football-standings.azharimm.site/leagues/${args.leagueId}`;
  console.log(`calling api at path: ${reqUrl}`);
  const data = axios.get(reqUrl).then(
    response => {
      console.log('response data:' + JSON.stringify(response.data));
      return response.data;
    },
    error => {
      console.log('API Error during axios call :', error);
      return errorResponse;
    }
  );
  return data;
};

const getSeasonDetails = function getSeasonDetails(context, args) {
  const reqUrl = `https://api-football-standings.azharimm.site/leagues/${args.leagueId}/seasons`;
  console.log(`calling api at path: ${reqUrl}`);
  const data = axios.get(reqUrl).then(
    response => {
      console.log('response data:' + JSON.stringify(response.data));
      return response.data;
    },
    error => {
      console.log('API Error during axios call :', error);
      return errorResponse;
    }
  );
  return data;
};


const getSeasonStanding = function getSeasonStanding(context, args) {
  const reqUrl = `https://api-football-standings.azharimm.site/leagues/${args.seasonInput.leagueId}/standings?season=${args.seasonInput.season}&sort=${args.seasonInput.sort}`;
  console.log(`calling api at path: ${reqUrl} `);
  const data = axios.get(reqUrl).then(
    response => {
      console.log('response data:' + JSON.stringify(response.data));
      return response.data;
    },
    error => {
      console.log('API Error during axios call :', error);
      return errorResponse;
    }
  );
  return data;
};


module.exports.getAllLeagues = getAllLeagues;
module.exports.getLeagueDetails = getLeagueDetails;
module.exports.getSeasonDetails = getSeasonDetails;
module.exports.getSeasonStanding = getSeasonStanding;