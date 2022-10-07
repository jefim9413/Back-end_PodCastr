import { getRepository } from "typeorm";
import { File } from "../../../entities/file";

class ListFileServices {
  async execute() {
    const repository = getRepository(File);
    const listfile = await repository.find();
    return listfile;
  }
}

export { ListFileServices };
