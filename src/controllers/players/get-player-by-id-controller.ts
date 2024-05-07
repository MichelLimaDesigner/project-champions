import { Request, Response } from "express";
import { getPlayerByIdService } from "../../services/players/get-player-by-id-service";

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await getPlayerByIdService(id);
  res.status(httpResponse.statusCode).send(httpResponse.body);
};
