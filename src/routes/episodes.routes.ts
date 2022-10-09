import { Router } from "express";
import { CreateEpisodesController } from "../modules/episodes/controller/CreateEpisodesController";
import { ListEpisodesController } from "../modules/episodes/controller/ListEpisodesController";

const episodeRoutes = Router();

const createEpisodesController = new CreateEpisodesController();
const listEpisodesController = new ListEpisodesController();
episodeRoutes.post("/episode", createEpisodesController.handle);
episodeRoutes.get("/episode", listEpisodesController.handle);

export { episodeRoutes };
