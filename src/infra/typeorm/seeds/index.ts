import { createConnection } from 'typeorm'
import { PostgresStudent } from '../entities'
import { students } from './students.json'

(async function seeds() {
  const connection = await createConnection('default')
  const studentsRepository = connection.getRepository(PostgresStudent)
  await studentsRepository.save(students)
  await connection.close()
}())