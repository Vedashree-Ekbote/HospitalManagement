const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Registration = mongoose.model('Registration');
const Appointment = mongoose.model('Appointment');
const Admin = mongoose.model('Admin');
router.get('/',(req,res)=>{
    res.render("main/everyone");
});

router.get('/login',(req,res)=>{
    res.render("main/login");
});
router.get('/registration',(req,res)=>{
    res.render("main/registration");
});
router.get('/drlogin',(req,res)=>{
    
    res.render('main/drlogin');
});
router.get('/user',(req,res)=>{
    
    res.render('main/user');
});
// router.get('/drpage',(req,res)=>{
//     res.render('main/drpage');
// });
router.get('/schedule',(req,res)=>{
    res.render('main/schedule');
});
router.get('/appointment',(req,res)=>{
    res.render('main/appt');
});
router.post('/patientemailforcancle',async (req,res)=>{
    const email = req.body.email;
    const patientinfo = await Appointment.findOne({email:email});
    if(patientinfo.email == email){
        res.render('main/cancel',{
            patientid: patientinfo._id
        })
    }
    else{

    }
});
router.get('/cancel/:id',(req,res)=>{
    Appointment.findByIdAndRemove(req.params.id,(err,result)=>{
        if(!err){
            res.send("deleted");
        }
        else{
            console.log(err);
            console.log("eror");
        }
    })

})
// router.get('/cancel/:id',(req,res)=>{
//     Appointment.findByIdAndDelete(req.params.id, (err,res)=>{
//         if(!err){
//             res.send("deleted");
//         }
//         else{
//             console.log("error");
//         }
//     })
// })
// router.get('/cancel',(req,res)=>{
//     Appointment.find((err,docs)=>{https://github.com/Vedashree-Ekbote/HospitalManagement
//         if(!err){
//             res.render("main/cancelappt",{
//                 user:docs
//             });
//         }else{
//             res.send("Error");
//         }
//     })
//     // res.render("main/cancel");
// });
router.get('/schedule',(req,res)=>{
    res.render('main/schedule');
});
router.get('/history',(req,res)=>{
    res.render('main/history');
});
router.get('/appointment',(req,res)=>{
    Appointment.find((err,docs)=>{
        if(!err){
            res.render("/appointment",{
                list:docs
            });
        }
        else{
            console.log("error!");
        }
    })
});
router.post('/registration',async(req,res)=>{
    const password=req.body.password;
    const confirmpassword=req.body.confirmpassword;
    if(password===confirmpassword){
    try{
        const patient = new Registration({
            name:req.body.name,
            birthdate:req.body.birthdate,
            gender:req.body.gender,
            Age:req.body.Age,
            phone:req.body.phone,
            Occupation:req.body.Occupation,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password,
            confirmpassword:req.body.confirmpassword
        })
        const result = await patient.save();
        res.status(201).render('main/user',{
            username: req.body.username
        });
    }catch(err){
  res.status(404).send(err);
  console.log(err);
    }}else{
        res.send("Password and confirmpassword are not matching");
    }
});

router.post('/appointment',async(req,res)=>{
    try{
        const apt = new Appointment({
            name:req.body.name,
            age:req.body.age,
            mno:req.body.mno,
            dept:req.body.dept,
            email:req.body.email,
            address:req.body.address,
            time: req.body.time
        })
        const aptresult = await apt.save();
        res.status(201).render("main/user");
    }catch(err){
  res.status(404).send(err);
  console.log(err);
    }    
});

router.post('/drpage1',async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const drid=req.body.drid;
        const doctor=await Admin.findOne({email:email});
        if(doctor.drid==drid){
            Appointment.find((err,docs)=>{
                if(!err){
                    res.render("main/drpage",{
                        list: docs
                    })
                }
                else{
                    console.log("error");
                }
            })
            
        }
        else{
            res.send("Invalid Credentials!");
        }

        res.status(201);
    }catch(err){
  res.status(404).send("error");
  console.log(err);
    }    
});

router.post('/login',async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const patient=await Registration.findOne({email:email});
        if(patient.email==email){
            res.render('main/user',{
                username: patient.username
            })

        }
        else{
            res.send("Invalid Credentials!");
        }

        res.status(201);
    }catch(err){
  res.status(404).send("error");
  console.log(err);
    }    
});



router.post('/cancel',async(req,res)=>{
    
    // if(req.body._id==""){
    //     req.send("deleted done bye");
    // }else{
    //     deleterecord(req,res);

    // }
});

function deleterecord(req,res){

}
router.get('/history',async(req,res)=>{
    res.render("main/history",{
       
    });
});

router.post('/history',async(req,res)=>{
    try{
        const email=req.body.email;
        console.log(email);
        const patient=await Appointment.findOne({email:email});
        if(patient.email==email){
            Appointment.find({email:email},(err,docs)=>{
                if(!err){
                    res.render('main/history',{
                        list: docs
                    })
                }
            })
        }
        else{
            res.send("Invalid Credentials!");
        }

        res.status(201);
    }catch(err){
  res.status(404).send("error");
  console.log(err);
    }    
})
// router.post('/time',async(req,res)=>{
//     try{
//            const time=req.body.time;
//            const password=req.body.pass;
//            const patient=await Appointment().findOne({password:email});
//         if(patient.time==null){
//             patient.time=time;
//             const aptresult=Appointment.save();
//         }
//             else{
//                 res.send("Error");
//             }
//     }catch(err){
//             console.log("Error");
//     }
// })
// router.post('/login',async(req,res)=>{
//     const login = async(req,res,next)=>{
//         const {email,password}=req.body;
//         let existuser;
//         try {
//             existuser = await Registration.
//         }
        
//     }
// })
// router.post('/schedule',(req,res)=>{
//     const apt = new Appointment;
    
// });

module.exports= router;
