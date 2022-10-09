import { Router } from "express";
import { episodeRoutes } from "./episodes.routes";
import { fileRoutes } from "./file.routes";

const routes = Router();

routes.use("/", fileRoutes);
routes.use("/", episodeRoutes);

export { routes };
