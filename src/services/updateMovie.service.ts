import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { IMovieResp, iMovieUpdate } from '../interfaces'
import { movieResSchema } from '../schemas'

const updateMovieService = async (upMovieData: iMovieUpdate, idMovie: number): Promise<IMovieResp> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const oldMovieData = await movieRepository.findOneBy({
        id: idMovie
    })

    const newMovie = movieRepository.create({
        ...oldMovieData,
        ...upMovieData
    })

    await movieRepository.save(newMovie)

    const upMovie = movieResSchema.parse(newMovie)

    return upMovie
}

export default updateMovieService