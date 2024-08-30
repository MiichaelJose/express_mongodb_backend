import { Router } from 'express'
import { CollaboratorController } from '../controllers/collaborator-controller'

const router = Router()

const collaborator = new CollaboratorController()

router.use('/', collaborator.fetch)


export default router