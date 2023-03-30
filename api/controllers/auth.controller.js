import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req,res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password,5);
        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(201).send("User has been created.");

    } catch (err) {
        res.status(500).send(err);
    }
}

export const login = async (req,res) => {
    try {

        const user = await User.findOne({username: req.body.username});
        if(!user) return res.status(404).send("Username not found!");

        const isCorrect = bcrypt.compareSync(req.body.password, user.password); // bcrypt database'de encrypt edilmiş password ile request body'den gelen passwordü karşılaştırır.
        if(!isCorrect) return res.status(404).send("Wrong password or username"); // just Wrong password enough

        const {password, ...info} = user._doc;
        res.status(200).send(info);
        //ACCES TOKEN KISMINDAYIM.

    } catch (error) {
        res.status(500).send("Something went wrong!");
    }
    
}

export const logout = async (req,res) => {
    
}