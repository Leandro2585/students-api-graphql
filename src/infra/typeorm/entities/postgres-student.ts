import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('tb_student')
class PostgresStudent {
  @PrimaryGeneratedColumn('uuid')
  student_id!: string

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  cpf!: string
}