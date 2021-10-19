module.exports = (error,request,response,next)=>{
    console.dir(error.name)
    return response.status(500).json({message:"Internal Server Error"})
}