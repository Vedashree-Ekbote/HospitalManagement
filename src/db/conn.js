const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Vedashree:t63rXQUkybknxfLo@cluster0.5st0x1d.mongodb.net/PWI_Hospital?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database Connected successfully!!");
}).catch((e)=>{
    console.log(e);
});

require('../models/registration');
require('../models/appointment');
require('../models/admin');