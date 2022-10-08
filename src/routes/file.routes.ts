import { Router } from "express";
import { CreateFileController } from "../modules/files/controller/CreateFileController";
import { ListFileController } from "../modules/files/controller/ListFileController";
import { RemoveFileController } from "../modules/files/controller/RemoveFileController";
import { UpdateFileController } from "../modules/files/controller/UpdateFileController";

const fileRoutes = Router();
const createFileController = new CreateFileController();
const listFileController = new ListFileController();
const removeFileController = new RemoveFileController();
const updateFileController = new UpdateFileController();

fileRoutes.post("/file", createFileController.handle);
fileRoutes.get("/file", listFileController.handle);
fileRoutes.delete("/file/:id", removeFileController.handle);
fileRoutes.put("/file/:id", updateFileController.handle);

export { fileRoutes };
