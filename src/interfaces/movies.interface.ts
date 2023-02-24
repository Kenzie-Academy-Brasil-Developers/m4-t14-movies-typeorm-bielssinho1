import { DeepPartial, Repository } from 'typeorm';
import { z } from 'zod';
import { Movie } from '../entities';
import { movieCreateSchema, movieResSchema, returnListMovie } from '../schemas';

type iMovieCreate = z.infer<typeof movieCreateSchema>;
type iMovieUpdate = DeepPartial<Movie>;
type iMovieRepo = Repository<Movie>;
type IMovieResp = z.infer<typeof movieResSchema>
type IListMovie = z.infer<typeof returnListMovie>

export { iMovieCreate, iMovieUpdate, iMovieRepo, IMovieResp, IListMovie };