import { getRepository } from "typeorm";
import { Episodes } from "../../../entities/episodes";

class ListEpisodesServices {
  async execute() {
    const repository = getRepository(Episodes);

    const episodes = await repository.find({ relations: ["file"] });

    return episodes;
  }
}

export { ListEpisodesServices };
