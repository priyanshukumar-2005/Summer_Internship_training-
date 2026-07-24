const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const app = express();

app.use(express.json());

//fake user
const user = {
  id: 1,
  username: "admin",
  password: bcrypt.hashSync("12345", 10),
};

//log in
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== user.username) {
    return res.status(401).json({
      messaage: "invalid username",
    });
  }

  const validpaassword = bcrypt.compareSync(password, user.password);

  if (!validpaassword) {
    return res.status(401).json({
      messaage: "invalid password",
    });
  }

  //generate token
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.jwt_secret_key,
    { expiresIn: "1h" },
  );

  res.json({
    messaage: "login successful",
    token,
  });
});

//middleware
function verifyToken(req ,res , next){
  const authHeader = req.headers["authorization"]

  if(!authHeader){
    return res.status(401).json({
      messaage:"tkoen required"
    })
  }

  const token = authHeader.split("")[1];


  jwt.verify(token,process.env.jwt_secret_key,(err,decoded)=>{
    if(err){
      return res.status(403).json({
        messaage:"invalid token"
      });
    }


    req.user=decoded;

    next();
  })
}


//protected routes
app.get('/profile',(req,res , next)=>{
  res,json({
    messaage:"welcome to profile",
    user : req.user
  });
})




//server
app.listen(3003, () => {
  console.log(`server is running  at http://localhost:3003`);
});