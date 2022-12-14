import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { File } from "./file";

@Entity("episodes")
class Episodes {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  members: string;

  @Column()
  description: string;

  @Column()
  published_at: string;

  @Column()
  thumbnail: string;

  @ManyToOne(() => File)
  @JoinColumn({ name: "file_id" })
  file: File;

  @Column()
  file_id: string;
}

export { Episodes };
