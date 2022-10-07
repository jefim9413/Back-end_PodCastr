import { Router } from "express";
import { CreateFileController } from "../modules/files/controller/CreateFileController";
import { ListFileController } from "../modules/files/controller/ListFileController";

const fileRoutes = Router();
const createFileController = new CreateFileController();
const listFileController = new ListFileController();

fileRoutes.post("/file", createFileController.handle);
fileRoutes.get("/file", listFileController.handle);

export { fileRoutes };
