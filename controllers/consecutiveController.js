import { db } from '../config/db.js'

const newConsecutive = async (req, res) => {
    try {
        const { addressee, objetive, userId, nomenclature } = req.body;

        // Validar que los campos obligatorios estén presentes
        if (!addressee || !objetive || !userId) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios." });
        }

        // Obtener la conexión al pool de la base de datos
        const pool = await db();

        

        // Calcular el nuevo consecutivo
        const newConsecutive = `${nomenclature}`;

        // Insertar el nuevo consecutivo en la base de datos
        const [result] = await pool.query(
            `INSERT INTO consecutive (consecutive, date, addressee, objetive, userId) VALUES (?, NOW(), ?, ?, ?)`,
            [newConsecutive, addressee, objetive, userId]
        );

        // Respuesta al cliente
        res.status(201).json({
            msg: "Consecutivo creado exitosamente.",
            consecutive: newConsecutive,
            id: result.insertId,
        });
    } catch (error) {
        console.error("Error al crear el consecutivo:", error);
        res.status(500).json({ msg: "Error del servidor." });
    }
};

const getAllConsecutive = async (req, res) => {
        
    res.json({ msg: "opteniendo consecutivos" });
};

const uptadeConsecutive = async (req, res) => {
    const {id} = req.params
    res.json({ msg: "editando consecutivo",id });
};

const deleteConsecutive = async (req, res) => {   
    const {id} = req.params
    res.json({ msg: "Eliminando consecutivo",id });
};

export { newConsecutive, getAllConsecutive, uptadeConsecutive, deleteConsecutive };
