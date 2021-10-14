import 'reflect-metadata'
import { server } from '@main/config/app'

server.listen().then(({ url }) => console.log(`Server started at ${url}`))
