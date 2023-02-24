import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { returnListMovie } from '../schemas'



const listMoviesService = async (): Promise<Movie[]> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    
    const listMovies: Movie[] = await movieRepository.find()

    const Movies = returnListMovie.parse(listMovies)

    return Movies
}

export default listMoviesService