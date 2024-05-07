export interface PlayerModel {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: PlayerStatisticsModel;
}

export interface PlayerStatisticsModel {
  overall: number;
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}
