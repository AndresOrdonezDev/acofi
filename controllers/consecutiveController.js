//import { db } from '../config/db.js'

const newConsecutive = async (req, res) => {
    const { name } = req.body
    res.json({ msg: "creando consecutivo", name });
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
