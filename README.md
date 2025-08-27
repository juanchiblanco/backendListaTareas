# 📌 Backend - Lista de Tareas

Este es el backend de la aplicación **Lista de Tareas**, desarrollado con **Node.js**, **Express** y **MongoDB**.  
Se encarga de exponer una API REST para crear, leer, actualizar y eliminar tareas.

---

## 🚀 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [Cors](https://www.npmjs.com/package/cors)

---

## 📂 Estructura del proyecto

backend/
│── src/
│ ├── index.js # Punto de entrada del servidor
│ ├── database.js # Conexión a la base de datos
│ ├── routes/
│ │ └── tareas.routes.js # Rutas de la API
│ ├── controllers/
│ │ └── tareas.controller.js # Controladores de tareas
│ ├── models/
│ │ └── Tarea.js # Modelo de tarea
│── package.json

yaml
Copiar código

---

## ⚙️ Instalación y configuración

1. Clonar el repositorio:

bash
git clone https://github.com/juanchiblanco/backendListaTareas
cd backend
Instalar dependencias:

bash
Copiar código
npm install
Asegúrate de que MongoDB esté corriendo localmente o que tu conexión a la base de datos esté configurada directamente en database.js.

Iniciar el servidor:

bash
Copiar código
npm run dev
📡 Endpoints disponibles
🔹 Obtener todas las tareas
bash
Copiar código
GET /api/tareas
🔹 Crear una nueva tarea
css
Copiar código
POST /api/tareas
Body:
{
  "inputTarea": "Estudiar React"
}
🔹 Editar una tarea
bash
Copiar código
PUT /api/tareas/:id
Body:
{
  "inputTarea": "Estudiar React con hooks"
}
🔹 Eliminar una tarea
bash
Copiar código
DELETE /api/tareas/:id
🛠 Scripts
npm start → Levanta el servidor en producción.

npm run dev → Levanta el servidor con nodemon para desarrollo.

## 📌 Notas
Asegúrate de tener MongoDB corriendo en tu máquina o usar un servicio en la nube como MongoDB Atlas.

No se requiere archivo .env, la conexión a la base de datos se configura directamente en el código.

## 👨‍💻 Autor

Juan Manuel Blanco