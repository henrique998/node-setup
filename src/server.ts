import { app } from './infra/app'
import { env } from './infra/env'

app
  .listen({
    port: env.PORT,
  })
  .then(() =>
    console.log(`🚀 Server is running at: http://localhost:${env.PORT}`),
  )
