import User from "../models/user.model.js"
import createError from "../utils/createError.js";

export const deleteUser = async (req,res,next) => {
    /**
     * BU VERSİYONU JWT MIDDLEWARE KULLANMADAN YAPILAN HALİ:
     * 
    const user = await User.findById(req.params.id); // if you forget "await" you can see in console user._id undefined.
    const token = req.cookies.accessToken; 
    if (!token) return res.status(401).send("You are not authenticated!");
    jwt.verify(token, process.env.JWT_KEY, async(error, payload) => {
        if(error){
            console.log(error);
        }
        // res.send(payload); // just we checked this payload on postman.

        // bu kısmı middlware tanımlayıp da yapabiliriz.
        // middleware cookie den token ı alır ve "verify", doğrular, onaylar.
        if (payload.id !== user._id.toString()) { // payload.id yerine req.userId yazıldı.
            return res.status(403).send("You can delete ONLY YOUR ACCOUNT!"); // you have token but you are not the owner.
        }
        await User.findByIdAndDelete(req.params.id); // we can find this user and delete 
        res.status(200).send("Your account has been deleted!");
    });
     */
    const user = await User.findById(req.params.id);
    if(req.userId !== user._id.toString()) {
        return next(createError(403, "You can delete only your account!"));
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("Your account deleted.");
 };