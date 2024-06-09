import {Hono} from 'hono'

import {  createRestaurant, deleteRestaurant, getRestaurantById, getAllRestaurants, updateRestaurant } from './restaurant.controller'

export const restaurantRouter = new Hono()

restaurantRouter.get('/restaurant', getAllRestaurants)
restaurantRouter.get('/restaurant/:id', getRestaurantById)
restaurantRouter.post('/restaurant', createRestaurant)
restaurantRouter.put('/restaurant/:id', updateRestaurant)
restaurantRouter.delete('/restaurant/:id', deleteRestaurant)