import {Hono} from 'hono'

import { createState, deleteState, getAllStates, getStateById, updateState } from './state.controller'

    export const stateRouter = new Hono()

stateRouter.get('/state', getAllStates)
stateRouter.get('/state/:id', getStateById)
stateRouter.post('/state', createState)
stateRouter.put('/state/:id', updateState) 
stateRouter.delete('/state/:id', deleteState)