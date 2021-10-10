import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class tbStudents1633903449549 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'tb_student',
      columns: [
        {
          name: 'student_id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'email',
          type: 'varchar'
        },
        {
          name: 'cpf',
          type: 'varchar'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tb_student')
  }

}
