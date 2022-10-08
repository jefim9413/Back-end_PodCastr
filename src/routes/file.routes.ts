import { Router } from "express";
import { CreateFileController } from "../modules/files/controller/CreateFileController";
import { ListFileController } from "../modules/files/controller/ListFileController";
import { RemoveFileController } from "../modules/files/controller/RemoveFileController";

const fileRoutes = Router();
const createFileController = new CreateFileController();
const listFileController = new ListFileController();
const removeFileController = new RemoveFileController();

fileRoutes.post("/file", createFileController.handle);
fileRoutes.get("/file", listFileController.handle);
fileRoutes.delete("/file/:id", removeFileController.handle);

export { fileRoutes };
