import fastify, { FastifyError, FastifyInstance } from 'fastify'

import GQL from 'fastify-gql'
import * as graphql from './graphql'

const server: FastifyInstance = fastify({ logger: true })

// http://127.0.0.1:8080/graphql?query={ add(x: 1, y: 1) }
server.register(GQL, graphql)

server.listen(8080, (error: FastifyError, _: string) => {
  if (error) {
    server.log.error(error)
    process.exit(1)
  }
})