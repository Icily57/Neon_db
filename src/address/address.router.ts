import {Hono} from 'hono'

import {  createAddress, deleteAddress, getAddressById, getAllAddresses, updateAddress } from './address.controller'

export const addressRouter = new Hono()

addressRouter.get('/address', getAllAddresses)
addressRouter.get('/address/:id', getAddressById)
addressRouter.post('/address', createAddress)
addressRouter.put('/address/:id', updateAddress)
addressRouter.delete('/address/:id', deleteAddress)