const express = require('express');
const contactRoutes = require('./routes/contact');
const userRoutes = require('./routes/user');
const app = express();
const cors = require('cors');


require('dotenv').config();
require('./db/connection')

app.set('port', process.env.PORT);
app.use(express.json({limit:'50mb'}));
app.use(cors());

app.use('/api/auth', userRoutes);
app.use('/api', contactRoutes);


app.listen(app.get('port'),()=>console.log(`server listening in http://localhost:${app.get('port')}`));
