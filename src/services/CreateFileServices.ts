import { getRepository } from "typeorm";
import { File } from "../entities/file";

type FileResquest = {
  url: string;
  type: string;
  duration: number;
};

class CreateFileServices {
  async execute({ url, type, duration }: FileResquest): Promise<File> {
    const repository = getRepository(File);

    const file = repository.create({
      url,
      duration,
      type,
    });

    await repository.save(file);

    return file;
  }
}

export { CreateFileServices };
