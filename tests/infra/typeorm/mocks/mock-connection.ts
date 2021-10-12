import { newDb, IMemoryDb } from 'pg-mem'

export const makeFakeDatabase = async (entities?: any[]): Promise<IMemoryDb> => {
  const database = newDb()
  const connection = await database.adapters.createTypeormConnection({
    type: 'postgres',
    entities: entities
  })
  await connection.synchronize()
  return database
}