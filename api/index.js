
// ========= IMPORT EXPORT DI NODE JS
// Export = module.export
// Import = require

// var Bebas = require('./fnPlus')

// console.log(Bebas(5,6))



// ======= BUILD IN LIBRARY
// const Crypto = require('crypto')
// encrypt and decrypt
// ENCRYPT
// const name = 'jamaludin fikri'
// var mykey = Crypto.createCipher('aes-128-cbc', 'secretkey');
// var mystr = mykey.update(name, 'utf8', 'hex')
// mystr += mykey.final('hex');
// console.log(mystr)


// DECRYPT
// var mykey = Crypto.createDecipher('aes-128-cbc', 'secretkey');
// var mystr = mykey.update('7c1a1871d2b84c87f439e2a7141090a7', 'hex', 'utf8')
// mystr += mykey.final('utf8');
// console.log(mystr)



// const os = require('os')

// console.log(os.cpus())
// console.log(os.platform())


// ==========+ NPM MODULE
// Ex Express, React, Mysql, Moment, Axios, Reactstrap, React-router




const express = require('express')
const mysql = require('mysql')

const conn = mysql.createConnection({
    user : "root",
    password : '111111111',
    database : "data_titanic",
    port : 3306
})

const PORT = 2000

const app = express()

// route sama kayak function punya nama dan didalamnya ada block code;
// req res
// res buat kirim dari be ==> fe
// req buat nerima dari fe ==> be
// HTTP METHOD
    // POST ==> create data
    // GET  ==> Read Data
    // PATCH  ==> update data
    // PUT  ==> Update data
    // DELETE ==> Delete data

// POSTMAN
    // PENGGANTI FRONT END
    // TESTING API
    // GENERATE DOCUMENTATION
// BACKEND JOBS
    // BIKIN API
    // PROVIDE GOOD DOCUMENTATION

app.get('/' , (req,res) => {
    res.send('Hello World')
})

app.get('/getusers' , (req,res) => {
    conn.query('select * from users;',(err,result) => {
        if(err) throw err
        res.send(result)
    })
})


app.get('/usersmale' , (req,res) => {
    conn.query('select * from users where Sex = "male";', (err,result) => {
        if(err) throw err
        res.send(result)
    })
})


app.get('/simple' , (req,res) => {
    for(var i = 0 ; i < 5 ; i ++){
        console.log(i)
    }
})


app.listen(PORT , () => console.log('API Running on port ' + PORT ))







