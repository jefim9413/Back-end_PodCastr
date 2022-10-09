import { Request, Response } from "express";
import { CreateEpisodesServices } from "../services/CreateEpisodesServices";

class CreateEpisodesController {
  async handle(request: Request, response: Response) {
    const {
      id,
      title,
      members,
      published_at,
      thumbnail,
      file_id,
      description,
    } = request.body;

    const service = new CreateEpisodesServices();
    const res = await service.execute({
      id,
      title,
      members,
      published_at,
      thumbnail,
      description,
      file_id,
    });

    console.log(res);

    if (res instanceof Error) {
      return response.status(400).json(res.message);
    }

    return response.json(res);
  }
}

export { CreateEpisodesController };
