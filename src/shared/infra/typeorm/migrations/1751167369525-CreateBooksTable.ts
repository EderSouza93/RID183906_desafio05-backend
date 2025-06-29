import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBooksTable1751167369525 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'livros',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'titulo',
            type: 'varchar',
          },
          {
            name: 'paginas',
            type: 'integer',
          },
          {
            name: 'codigo_ISBN',
            type: 'varchar',
          },
          {
            name: 'editora',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('livros')
  }

}
