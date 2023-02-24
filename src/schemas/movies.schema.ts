import { z } from 'zod'

const movieCreateSchema = z.object({
    name: z.string().max(50),
    description: z.string().nullable(),
    duration: z.number().positive(),
    price: z.number().positive()
})

const movieResSchema = movieCreateSchema.extend({
    id: z.number()
})

const returnListMovie = movieResSchema.array()

const upSchema = movieCreateSchema.omit({name: true})

const movieUpdateSchema = upSchema.partial()

export {
    movieCreateSchema,
    movieResSchema,
    returnListMovie,
    movieUpdateSchema
}