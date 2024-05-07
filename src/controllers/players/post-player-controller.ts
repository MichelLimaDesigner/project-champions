import { Request, Response } from "express";
import { createPlayerService } from "../../services/players/create-player-service";

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await createPlayerService(bodyValue);

  if (httpResponse) res.status(httpResponse.statusCode).json(httpResponse.body);
};
