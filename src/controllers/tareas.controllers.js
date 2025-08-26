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