/* eslint-disable consistent-return */
import { getRepository } from "typeorm";
import { File } from "../../../entities/file";

class RemoveFileServices {
  async execute(id: string) {
    try {
      const repository = getRepository(File);

      if (!(await repository.findOne({ id }))) {
        return;
      }

      await repository.delete(id);
    } catch (error) {
      return new Error("File does not exists!");
    }
  }
}
export { RemoveFileServices };
