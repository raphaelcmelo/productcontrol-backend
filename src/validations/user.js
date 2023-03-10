const { z } = require('zod');

exports.userValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  cpf: z.number(),
  password: z.string()
})