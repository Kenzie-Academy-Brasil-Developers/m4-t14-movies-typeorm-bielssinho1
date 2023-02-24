import { Router } from 'express'
import { crateMovieController, deleteMovieController, listMovieController, updateMovieController } from '../controllers/movie.controllers'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import ensureMovieExistsMiddleware from '../middlewares/ensureMovieExists.middleware'
import ensureMovieExistsByIdMiddleware from '../middlewares/ensureMovieExistsById.middleware'
import { movieCreateSchema } from '../schemas'

const movieRouter: Router = Router()

movieRouter.post('', ensureDataIsValidMiddleware(movieCreateSchema), ensureMovieExistsMiddleware, crateMovieController)
movieRouter.get('', listMovieController)
movieRouter.patch('/:id', ensureMovieExistsByIdMiddleware, updateMovieController)
movieRouter.delete('/:id', ensureMovieExistsByIdMiddleware, deleteMovieController)

export default movieRouter