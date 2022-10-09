import { Request, Response } from "express";
import { ListEpisodesServices } from "../services/ListEpisodesServices";

class ListEpisodesController {
  async handle(resquest: Request, response: Response) {
    const service = new ListEpisodesServices();

    const list = await service.execute();

    return response.json(list);
  }
}

export { ListEpisodesController };
