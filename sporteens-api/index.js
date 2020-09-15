// Initialize all packages
const mysql = require('mysql');
const express = require('express');
const app = express()

// mysql connection
const db = mysql.createConnection({
    user : "root",
    password : "111111111",
    database : "sporteens",
    port : 3306
})

// Initialize body parser , buat nerima req.body
app.use(express.json())

// ports
const PORT = 2000

// root route
app.get('/' , (req,res) => {
    res.send("SELAMAT DATANG DI API SPORTEENS")
})


// CRUD

// CREATE
app.post('/product' , (req,res) => {

    // nerima data dari front end
    const data = req.body

    // data dari front end nyampe di backend
    console.log(data)

    // kirim data ke mysql
    // var sqlQuery = `INSERT INTO products (name, price, images_1,images_2,images_3,category_id,stock)
    // VALUES ("${data.name}" , "${data.price}","${data.images_1}","${data.images_2}","${data.images_3}","${data.category_id}", "${data.stock}");`

    // cara simple insert data , syaratnya prop object === colomn di database

    
    var query_2 = 'insert into products set ?'
    db.query(query_2 ,data , (err,result) => {
        
        // buat handling error
        try {
            if(err) throw err
            res.send('add data success')
        } catch (error) {
            res.send(error.message)
        }
       
       
    })
    

})



app.listen(PORT , () => console.log('API RUNNING ON PORT ' + PORT))

