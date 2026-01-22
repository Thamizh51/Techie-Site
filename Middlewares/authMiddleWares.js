

export const authMiddleware = (req,res,next)=>{
     const {email,password} = req.body

     if(!email || !password){
        res.status(400).json({msg:"Username is missing"})
     }
     next()
}