module.exports = (error,request,response,next)=>{
    console.dir(error)
    return response.status(500).json({message:"Internal Server Error"})
}