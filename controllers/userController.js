const UserController = {}
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

UserController.createUser = async (request,response,next) => {
    const data = request.body
    console.log(data);
    data.password  = await bcrypt.hash(data.password,10);

    try {
        const user = await User.create(data)
        const access_token = jwt.sign({id: user._id}, process.env.SECRET_JWT)

        return response.status(200).json({
            message:"User created successfully",
            user,
            access_token
        })
    } catch (error) {
        next(error)
    }  
}

UserController.loginUser = async (request,response,next) => {
    const {email,password} = request.body
    const user = await User.findOne({email});
    const validPassword = !user ? false : await bcrypt.compare(password, user.password)

    if(!(user && validPassword)) {
        return response.status(401).json({message: 'Invalid credentials'})
    }

    const access_token = jwt.sign({id: user._id}, process.env.SECRET_JWT)
    
    return response.status(200).json({
        message:"User logged successfully",
        user,
        access_token
    })

}


UserController.getUserInformation = async (request,response,next) => {
    try {
        const user = await User.findById(request.id)
        return response.status(200).json({
            user,
        })
    } catch (error) {
        next(error)
    }  
}

module.exports = UserController