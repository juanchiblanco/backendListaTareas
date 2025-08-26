import { Router } from "express";
///import { crearTarea, leerTareas, leerTareaPorId, borrarTarea, editarTarea } from "../controllers/productos.controllers.js";
import { crearTarea, leerTareas} from "../controllers/tareas.controllers.js";

const router = Router()

router.route('/').get(leerTareas).post(crearTarea)
//router.route('/:id').get(leerTareaPorId).delete(borrarTarea).put(editarTarea)

export default router;