import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
  inputTarea: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    unique: true,
    validate: {
      validator: (valor) => {
        return /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{3,50}$/.test(
          valor
        );
      },
    },
  },
});

const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;
