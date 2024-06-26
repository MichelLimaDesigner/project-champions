import { PlayerModel } from "../../models/player-model";

export const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      overall: 94,
      pace: 85,
      shooting: 95,
      passing: 91,
      dribbling: 96,
      defending: 40,
      physical: 75,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      overall: 92,
      pace: 89,
      shooting: 93,
      passing: 81,
      dribbling: 88,
      defending: 35,
      physical: 85,
    },
  },
  {
    id: 3,
    name: "Neymar Jr",
    club: "Paris Saint-Germain",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      overall: 91,
      pace: 92,
      shooting: 84,
      passing: 86,
      dribbling: 95,
      defending: 30,
      physical: 78,
    },
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      overall: 91,
      pace: 77,
      shooting: 86,
      passing: 92,
      dribbling: 88,
      defending: 70,
      physical: 81,
    },
  },
  {
    id: 5,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      overall: 91,
      pace: 97,
      shooting: 86,
      passing: 78,
      dribbling: 92,
      defending: 39,
      physical: 76,
    },
  },
  {
    id: 6,
    name: "Robert Lewandowski",
    club: "Bayern Munich",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      overall: 90,
      pace: 78,
      shooting: 94,
      passing: 75,
      dribbling: 85,
      defending: 45,
      physical: 88,
    },
  },
];
