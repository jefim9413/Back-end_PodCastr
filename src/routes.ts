import { Router } from "express";
import { CreateFileController } from "./controller/CreateFileController";

const routes = Router();
const fileController = new CreateFileController();
routes.post("/file", fileController.handle);

export { routes };
