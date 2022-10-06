import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFile1665055026968 implements MigrationInterface {
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
            type: "numeric",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("file");
  }
}
