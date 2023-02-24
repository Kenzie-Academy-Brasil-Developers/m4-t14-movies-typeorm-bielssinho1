import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { returnListMovie } from '../schemas'



const listMoviesService = async (payload: any): Promise<Movie[]> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    
    const page: number = Number(payload.page) > 0 ? payload.page : 1
    const perPage: number = Number(payload.perPage) > 0 ? payload.perPage : 5
    const order: any = payload.order.toUpperCase() === 'ASC' || payload.order.toUpperCase() === 'DESC' ? payload.order.toUpperCase() : 'ASC'
    const sort: any = payload.sort.toLowerCase() === 'price' || payload.sort.toLowerCase() === 'duration' ? payload.sort.toLowerCase() : 'id' 

    const listMovies: Movie[] = await movieRepository.find({
        take: perPage,
        skip: perPage * (page - 1),
        order:{
            [sort]: order
        }
    })

    const movies = returnListMovie.parse(listMovies)

    return movies
}

export default listMoviesService