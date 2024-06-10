import { Hono } from "hono";

import { createStatusCatalog, deleteStatusCatalog, getAllStatusCatalogs, getStatusCatalogById, updateStatusCatalog } from "./status_catalog.controller";

export const statusCatalogRouter = new Hono()

statusCatalogRouter.get('/status_catalog', getAllStatusCatalogs)
statusCatalogRouter.get('/status_catalog/:id', getStatusCatalogById)
statusCatalogRouter.post('/status_catalog', createStatusCatalog)
statusCatalogRouter.put('/status_catalog/:id', updateStatusCatalog)
statusCatalogRouter.delete('/status_catalog/:id', deleteStatusCatalog)