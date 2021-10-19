const jwt = require('jsonwebtoken');

module.exports = (request,response,next)=>{
    const authorization = request.get('authorization');

    try {
        const token = String(authorization).slice(7)
        const {id} = jwt.verify(token,process.env.SECRET_JWT)
        request.id = id;
        next()
    } catch (error) {
        console.log(error)
        return response.status(401).json({message:"Token not provided or is invalid"})
    }
}