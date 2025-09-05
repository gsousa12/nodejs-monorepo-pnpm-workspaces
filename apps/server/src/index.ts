import { User } from '@demo/types'
import fastify from 'fastify'

const server = fastify()

const user : User = {
    id: '1',
    name: 'John Doe',
    email: "teste@email.com",
    createdAt: new Date(),
    updatedAt: new Date()
  }

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address} and ${user.name}`)
})