import {Hono} from 'hono'

import {  createRestaurantOwner, deleteRestaurantOwner, getRestaurantOwnerById, getAllRestaurantOwners, updateRestaurantOwner } from './restaurant_owner.controller'

export const restaurantOwnerRouter = new Hono()

restaurantOwnerRouter.get('/restaurant_owner', getAllRestaurantOwners)
restaurantOwnerRouter.get('/restaurant_owner/:id', getRestaurantOwnerById)
restaurantOwnerRouter.post('/restaurant_owner', createRestaurantOwner)
restaurantOwnerRouter.put('/restaurant_owner/:id', updateRestaurantOwner)
restaurantOwnerRouter.delete('/restaurant_owner/:id', deleteRestaurantOwner)