import Tarea from "../models/tarea.js";

export const crearTarea = async (req, res) => {
  try {
    const nuevaTarea = new Tarea(req.body);
    await nuevaTarea.save();
    res.status(201).json({ mensaje: "La tarea fue creada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear la tarea" });
  }
};

export const leerTareas = async (req, res) => {
  try {
    const listaTareas = await Tarea.find();
    res.status(200).json(listaTareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer las tareas" });
  }
};

export const leerTareaPorId = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener la tarea solicitada" });
  }
};

export const borrarTarea = async (req,res) => {
  try {
    const tareaBorrada = await Tarea.findByIdAndDelete(req.params.id);
    if (!tareaBorrada) {
      return res.status(404).json({ mensaje: "No se encontro la tarea y no pudimos borrarla" });
    }
    res.status(200).json({mensaje: 'Tarea eliminada exitosamente'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al borrar la tarea" });
  }
}