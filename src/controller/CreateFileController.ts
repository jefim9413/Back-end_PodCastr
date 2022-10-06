import { Response, Request } from "express";
import { CreateFileServices } from "../services/CreateFileServices";

class CreateFileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { url, type, duration } = request.body;

    const service = new CreateFileServices();

    const res = await service.execute({ url, type, duration });

    return response.json(res);
  }
}

export { CreateFileController };
