import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { AppError } from '../errors'

const ensureMovieExistsByIdMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const findMovie = await movieRepository.findOne({
        where: {
            id: +req.params.id
        }
    })

    if(!findMovie){
        throw new AppError('User not found!', 404)
    }

    return next()
}

export default ensureMovieExistsByIdMiddleware