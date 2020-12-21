import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddUserColumns1608221860724 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({
        name: 'cpf',
        type: 'varchar',
        isNullable: false,
        default: '123',
      }),
      new TableColumn({
        name: 'date_of_birth',
        type: 'varchar',
        isNullable: false,
        default: '123',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'cpf');
    await queryRunner.dropColumn('users', 'date_of_birth');
  }
}
