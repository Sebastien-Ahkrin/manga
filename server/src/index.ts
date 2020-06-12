import fastify, {
  FastifyError, 
  FastifyInstance,
  FastifyReply, 
  FastifyRequest,  
} from 'fastify'

const server: FastifyInstance = fastify({ logger: true })

server.get('/', (request: FastifyRequest, response: FastifyReply<any>) => {
  response.send('Hello, World!')
})

server.listen(8080, (error: FastifyError, address: string) => {
  if (error) {
    server.log.error(error)
    process.exit(1)
  }
})