import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { returnListMovie } from '../schemas'



const listMoviesService = async (payload: any): Promise<Movie[]> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    
    const page: number = Number(payload.page) > 0 ? payload.page : 1
    const perPage: number = Number(payload.perPage) > 0 && Number(payload.perPage) <= 5 ? payload.perPage : 5
    const order: string = !payload.order ? 'ASC' :  payload.order.toUpperCase() === 'ASC' || payload.order.toUpperCase() === 'DESC' ? payload.order.toUpperCase() : 'ASC'
    const sort: string = !payload.sort ? 'id' : payload.sort.toLowerCase() === 'price' || payload.sort.toLowerCase() === 'duration' ? payload.sort.toLowerCase() : 'id' 

    const listMovies: Movie[] = await movieRepository.find({
        take: perPage,
        skip: perPage * (page - 1),
        order:{
            [sort]: order
        }
    })

    console.log(listMovies)

    const movies = returnListMovie.parse(listMovies)

    return movies
}

export default listMoviesService