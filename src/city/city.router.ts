import {Hono} from 'hono'

import { createCity, deleteCity, getAllCities, getCityById, updateCity } from './city.controller'

export const cityRouter = new Hono()

cityRouter.get('/city', getAllCities)
cityRouter.get('/city/:id', getCityById)
cityRouter.post('/city', createCity)
cityRouter.put('/city/:id', updateCity)
cityRouter.delete('/city/:id', deleteCity)