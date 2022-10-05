import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEpisodes1664993123536 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "file",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "url",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "duration",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("file");
  }
}
