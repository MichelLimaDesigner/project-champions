import { PlayerModel, PlayerStatisticsModel } from "../../models/player-model";
import { database } from "./players-database";

export const findAndModifyPlayer = async (
  id: number,
  statistics: PlayerStatisticsModel
): Promise<PlayerModel> => {
  const playerIndex = database.findIndex((player) => player.id === id);

  if (playerIndex !== -1) database[playerIndex].statistics = statistics;

  return database[playerIndex];
};
