import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("file")
class File {
  @PrimaryColumn()
  id: string;

  @Column()
  url: string;

  @Column()
  type: string;

  @Column()
  duration: number;

  file() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { File };
