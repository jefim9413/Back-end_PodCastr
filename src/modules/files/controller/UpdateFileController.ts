import { Response, Request } from "express";
import { UpdateFileServices } from "../services/UpdateFileServices";

class UpdateFileController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { url, type, duration } = request.body;

    const service = new UpdateFileServices();

    const result = await service.execute({ id, url, type, duration });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}

export { UpdateFileController };
