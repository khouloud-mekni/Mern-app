const User = require("../../models/User");

module.exports= async (req,res)=>{
    try {
        let {email} = req.query;
        let verifiedUser = await User.findOneAndUpdate({email}, {
            $set: {
                isVerified : true,
            },
        },
        {new: true});
        console.log(verifiedUser)
        res.status(200).json({status: true , data: verifiedUser})
    } catch (error) {
        if (error) throw error
        res.status(401).json({status: false , error})
        
    }
}