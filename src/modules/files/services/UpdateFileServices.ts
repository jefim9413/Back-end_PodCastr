import { getRepository } from "typeorm";
import { File } from "../../../entities/file";

type FileResquest = {
  id: string;
  url: string;
  type: string;
  duration: number;
};

class UpdateFileServices {
  async execute({ id, url, type, duration }: FileResquest) {
    const repository = getRepository(File);
    const file = await repository.findOne(id);
    if (!file) {
      return new Error("File already exits");
    }
    file.url = url || file.url;
    file.duration = duration || file.duration;
    file.type = type || file.type;

    await repository.update({ id }, file);

    return file;
  }
}

export { UpdateFileServices };
