import { Hono } from 'hono';

import { createDrivers, deleteDrivers, getAllDrivers, getDriversById,updateDrivers } from './drivers.controller';

export const driversRouter = new Hono()

driversRouter.get('/drivers', getAllDrivers)
driversRouter.get('/drivers/:id', getDriversById)
driversRouter.post('/drivers', createDrivers)
driversRouter.put('/drivers/:id', updateDrivers)
driversRouter.delete('/drivers/:id', deleteDrivers)

