import { Router } from "express";
import { CreateFileController } from "./controller/CreateFileController";
import { ListFileController } from "./controller/ListFileController";

const routes = Router();
const createFileController = new CreateFileController();
const listFileController = new ListFileController();
routes.post("/file", createFileController.handle);
routes.get("/file", listFileController.handle);

export { routes };
