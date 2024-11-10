const express = require('express')
const auth = require('../middleware/auth')
const { userRegistration,userLogin,userInfo } = require('../controller/userController')

const router = express.Router()

// API endpoints in Postman with sample requests and Responses
router.post('/users/register',userRegistration)
/* POST method http://localhost:8000/users/register in Body
{
  "username":"john",
  "email": "john@gmail.com",
  "password": "john@gmail.com"
}
Response:
{
  "message": "Registration  Successful",
  "newUser": {
    "username": "john",
    "email": "john@gmail.com",
    "password": "$2a$08$mig9rd7V2aEkoxa.BbDerOVIubLYtYX8Yb45d38oa5mCpcL3NneHi",
    "_id": "673074dce636ccd3ca5bfe68",
    "__v": 0
  }
}*/
router.post('/users/login',userLogin)
/* POST method http://localhost:8000/users/login in Body
{
  "email": "john@gmail.com",
  "password": "john@gmail.com"
}
Response:
{
  "message": "User logged in Successfully",
  "user": {
    "_id": "673074dce636ccd3ca5bfe68",
    "username": "john",
    "email": "john@gmail.com",
    "password": "$2a$08$mig9rd7V2aEkoxa.BbDerOVIubLYtYX8Yb45d38oa5mCpcL3NneHi",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzMwNzRkY2U2MzZjY2QzY2E1YmZlNjgiLCJpYXQiOjE3MzEyMjkxMDd9.5eaxzOkVPnTX1Ig9URAwhPhzp_qeuSbN0-KbEWgGwHU"
}*/
router.get('/users/info',auth,userInfo)
/* GET method http://localhost:8000/users/info in Headers
Key             Value
Authorization   Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzMwNzRkY2U2MzZjY2QzY2E1YmZlNjgiLCJpYXQiOjE3MzEyMjkxMDd9.5eaxzOkVPnTX1Ig9URAwhPhzp_qeuSbN0-KbEWgGwHU
Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzMwNzRkY2U2MzZjY2QzY2E1YmZlNjgiLCJpYXQiOjE3MzEyMjkxMDd9.5eaxzOkVPnTX1Ig9URAwhPhzp_qeuSbN0-KbEWgGwHU",
  "user": {
    "_id": "673074dce636ccd3ca5bfe68",
    "username": "john",
    "email": "john@gmail.com",
    "password": "$2a$08$mig9rd7V2aEkoxa.BbDerOVIubLYtYX8Yb45d38oa5mCpcL3NneHi",
    "__v": 0
  }
}*/

module.exports = router