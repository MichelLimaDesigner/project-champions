import { PlayerModel, PlayerStatisticsModel } from "../../models/player-model";
import fs from "fs/promises";

export const findAndModifyPlayer = async (
  id: number,
  statistics: PlayerStatisticsModel
): Promise<PlayerModel> => {
  const database = await fs.readFile("./src/data/players-data.json", "utf-8");
  const players: PlayerModel[] = JSON.parse(database);
  const playerIndex = players.findIndex((player) => player.id === id);

  if (playerIndex !== -1) players[playerIndex].statistics = statistics;

  return players[playerIndex];
};
