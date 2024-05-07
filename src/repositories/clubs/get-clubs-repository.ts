import { ClubsModel } from "../../models/club-model";
import fs from "fs/promises";

export const findAllClubs = async (): Promise<ClubsModel[]> => {
  const database = await fs.readFile("../../data/clubs-data.json", "utf-8");
  const clubs: ClubsModel[] = JSON.parse(database);
  return clubs;
};
