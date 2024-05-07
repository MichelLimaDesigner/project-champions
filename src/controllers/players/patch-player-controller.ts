import { Request, Response } from "express";
import { PlayerStatisticsModel } from "../../models/player-model";
import { patchPlayerService } from "../../services/players/patch-player-service";

export const patchPlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bodyValue: PlayerStatisticsModel = req.body;
  const httpResponse = await patchPlayerService(id, bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
