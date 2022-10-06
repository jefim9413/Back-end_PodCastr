import { Request, Response } from "express";
import { ListFileServices } from "../services/ListFileServices";

class ListFileController {
  async handle(_request: Request, response: Response) {
    const service = new ListFileServices();

    const list = await service.execute();

    return response.json(list);
  }
}

export { ListFileController };
