import 'reflect-metadata'
import './config/module-alias'
import { server } from '@main/config/app'
import { createConnection } from 'typeorm'

createConnection('default')
  .then(() => {
    server.listen().then(({ url }) => console.log(`Server started at ${url}`))
  }).catch(console.error)
