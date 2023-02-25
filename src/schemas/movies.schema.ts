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

const returnListMovies = z.object({
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    count: z.number().int(),
    data: z.array(movieResSchema)
})

export {
    movieCreateSchema,
    movieResSchema,
    returnListMovie,
    movieUpdateSchema,
    returnListMovies
}