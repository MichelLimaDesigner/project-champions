import { PlayerModel } from "../../models/player-model";
import fs from "fs/promises";

export const findAllPlayersRepository = async (): Promise<PlayerModel[]> => {
  const database = await fs.readFile("./src/data/players-data.json", "utf-8");
  const players: PlayerModel[] = JSON.parse(database);
  return players;
};
