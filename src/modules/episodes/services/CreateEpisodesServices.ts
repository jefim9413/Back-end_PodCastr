import { getRepository } from "typeorm";
import { Episodes } from "../../../entities/episodes";
import { File } from "../../../entities/file";

type EpisodesResquest = {
  id: string;
  title: string;
  members: string;
  description: string;
  published_at: string;
  thumbnail: string;
  file_id: string;
};

class CreateEpisodesServices {
  async execute({
    id,
    title,
    members,
    published_at,
    thumbnail,
    description,
    file_id,
  }: EpisodesResquest) {
    const repositoryEpisodes = getRepository(Episodes);
    const repositoryFile = getRepository(File);

    console.log(file_id);
    if (!(await repositoryFile.findOne({ id: file_id }))) {
      return new Error("file does not exists");
    }

    const episode = repositoryEpisodes.create({
      id,
      title,
      members,
      published_at,
      thumbnail,
      description,
      file_id,
    });
    await repositoryEpisodes.save(episode);

    return episode;
  }
}

export { CreateEpisodesServices };
