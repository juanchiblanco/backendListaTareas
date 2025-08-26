import tareasRoutes from "./tareas.routes.js";
import { Router } from "express";

const router = Router()

router.use('/tareas', tareasRoutes)

export default router;