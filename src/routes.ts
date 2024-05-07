import { Router } from "express";
import { getPlayer } from "./controllers/players/get-players-controller";
import { getPlayerById } from "./controllers/players/get-player-by-id-controller";
import { postPlayer } from "./controllers/players/post-player-controller";
import { deletePlayer } from "./controllers/players/delete-player-controller";
import { patchPlayer } from "./controllers/players/patch-player-controller";
import { getClubs } from "./controllers/clubs/get-clubs-controller";

const router = Router();

// Player Routes
router.get("/players/:id", getPlayerById);
router.post("/players", postPlayer);
router.patch("/players/:id", patchPlayer);
router.delete("/players/:id", deletePlayer);

router.get("/players", getPlayer);

// Clubs Routes
router.get("clubs", getClubs);

export default router;
