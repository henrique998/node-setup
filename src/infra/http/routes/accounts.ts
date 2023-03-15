import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function accountsRoutes(app: FastifyInstance) {
  app.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    return 'accounts'
  })
}
