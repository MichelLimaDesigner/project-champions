import { PlayerModel } from "../../models/player-model";
import fs from "fs/promises";

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  const database = await fs.readFile("./src/data/players-data.json", "utf-8");
  const players: PlayerModel[] = JSON.parse(database);
  return players.find((player) => player.id === id);
};
