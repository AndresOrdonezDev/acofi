// routes/consecutives.js
import express from "express"
const router = express.Router()

import { newConsecutive, getAllConsecutive, uptadeConsecutive, deleteConsecutive } from "../controllers/consecutiveController.js";

// Obtener todos los consecutivos
router.route('/')
  .get(getAllConsecutive)
  .post(newConsecutive)


// Actualizar un consecutivo
router.route("/:id")
  .post(uptadeConsecutive)

// Eliminar un consecutivo
router.route("/delete/:id")
  .get(deleteConsecutive);

export default router;
