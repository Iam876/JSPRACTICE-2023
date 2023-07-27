'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// part - 1
const players1 = game.players[0];
const players2 = game.players[1];

// part - 2
const [gk, ...fieldPlayers] = players1;
const [gk2, ...fieldPlayers2] = players2;

// part - 3
const [...allPlayers] = [...players1, ...players2];

// part - 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// part - 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// part - 6
let printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals was scored`);
};
// printGoals(...game.scored);
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Lewandowski', 'Kimmich');

// part - 7

team1 < team2 && console.log('Team 1 won the game.');
team1 > team2 && console.log('Team 2 is more likely to win the game.');
