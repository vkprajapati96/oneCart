import jwt from "jsonwebtoken"

export const adminAuth =async(req,res,next)=>{

try {
    let {token} = req.cookies;
    if (!token) {
        return res.status(400).json({message:"not authorized login again"})
    }
    let verifyToken =jwt.verify(token, process.env.JWT_SECRET)

    if (!verifyToken){
        return res.status(400).json({message:"not authorized login again"})
    }
req.adminEmail =process.env.ADMIN_EMAIL

next()
    
} catch (error) {
    console.log("adminAuth Error",error)
    return res.status(401).json({ message: ` adminAuth Error ${error}`});
}
}



