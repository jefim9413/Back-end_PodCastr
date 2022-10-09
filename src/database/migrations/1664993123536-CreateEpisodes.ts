import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEpisodes1664993123536 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "episodes",
        columns: [
          {
            name: "id",
            type: "varchar",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "members",
            type: "varchar",
          },
          {
            name: "published_at",
            type: "varchar",
          },
          {
            name: "thumbnail",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "file_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "fk_episodes_file",
            columnNames: ["file_id"],
            referencedTableName: "file",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("episodes");
  }
}
