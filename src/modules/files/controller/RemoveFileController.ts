import { Response, Request } from "express";
import { RemoveFileServices } from "../services/RemoveFileServices";

class RemoveFileController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new RemoveFileServices();

    const remove = await service.execute(id);

    if (remove instanceof Error) {
      return response.status(400).json(remove.message);
    }
    return response.status(200).end();
  }
}

export { RemoveFileController };
