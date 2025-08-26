import { Router } from "express";
//import { crearTarea, leerTareas, leerTareaPorId, borrarTarea, editarTarea } from "../controllers/productos.controllers.js";

const router = Router()

router.use('/test', (req,res)=>{
    res.status(200)
    res.send('Test')
})

//router.route('/').get(leerTareas).post(crearTarea)
//router.route('/:id').get(leerTareaPorId).delete(borrarTarea).put(editarTarea)

export default router;