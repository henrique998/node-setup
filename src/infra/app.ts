import fastify from 'fastify'
import { ZodError } from 'zod'
import { AppError } from '../application/errors/AppError'
import { accountsRoutes } from './http/routes/accounts'

const app = fastify()

app.register(accountsRoutes)

app.setErrorHandler((err, _, reply) => {
  if (err instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: err.format() })
  }

  if (err instanceof AppError) {
    return reply.status(err.statusCode).send({ message: err.message })
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})

export { app }
