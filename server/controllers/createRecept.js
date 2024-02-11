const { Recept } = require("../models/receptModel");
const bcrypt = require('bcrypt');

const createRecept = async (req, res) => {
    try {
        const recept = await Recept.findOne({ phno: req.body.phno });
        if (recept) return res.status(409).send({ message: "Already Registered" });
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        await Recept({ ...req.body, password: hashedPass }).save();
        res.status(200).send({ message: "Receptionist Account Created" });
    } catch (err) {
        return res.status(500).send({ message: "Server Error For Creating " + err })
    }
}

module.exports = { createRecept };