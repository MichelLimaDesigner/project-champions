import { PlayerModel } from "../../models/player-model";
import { findPlayerById } from "./get-player-by-id-repository";
import fs from "fs/promises";

export const insertPlayer = async (
  player: PlayerModel
): Promise<PlayerModel | undefined> => {
  const database = await fs.readFile("./src/data/players-data.json", "utf-8");
  const players: PlayerModel[] = JSON.parse(database);
  players.push(player);

  const dataPlayer = await findPlayerById(player.id);
  return dataPlayer;
};
