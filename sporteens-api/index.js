// Initialize all packages
const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');

// mysql connection
const db = mysql.createConnection({
    user : "root",
    password : "111111111",
    database : "sporteens",
    port : 3306
})

// buat nerima req.body 
app.use(express.json())

// Initialize Cors
app.use(cors())


// ports
const PORT = 2000

// root route
app.get('/' , (req,res) => {
    res.send("SELAMAT DATANG DI API SPORTEENS")
})




// CRUD

// CREATE
app.post('/product' , (req,res) => {

    // nerima data dari front end // req.body | req.params | req.query
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

// READ DATA
app.get('/products', (req,res) => {
    var query = 'select * from products;'
    db.query(query,(err,result) => {
        try {
            if(err) throw err
            res.send(result)
        } catch (error) {
            res.send(error.message)
        }
    })
})




app.get('/product/:id' , (req,res) => {
    var id = req.params.id
    var sqlQuery = 'select * from products where id = ?'
    db.query(sqlQuery,id,(err,result) => {
        try {
            if(result.length > 0){
                res.send(result)
            }else{
                res.send("Data with id " + id + " not found")
            }
        } catch (error) {
            res.send(error.message)
        }
    }) 
})

app.get('/filterbyname', (req,res) => {
    var name = req.query.name
    // var price = req.query.harga
    // console.log(price)
    console.log(name)

    var query = `select * from products where name like "%${name}%";`
    db.query(query,(err,result) => {
        try {
            if(err) throw err
            if(result.length > 0){
                res.send(result)
            }else{
                res.send('data not found')
            }
        } catch (error) {
            res.send(error.message)
        }
        
    })
})


app.patch('/product/:bebas' , (req,res) => {
    const id = req.params.bebas
    const data = req.body
    console.log(data)
    console.log(id)

    // var queryUpdate = `UPDATE products
    // SET name="${data.name}"
    // WHERE id=${id};`

    // get data with id
    var getQuery = 'select * from products where id = ?'
    db.query(getQuery,id,(err,result) => {
        try {
            if(err) throw err

            // if data exist, then update the data
            if(result.length > 0){
                var queryUpdateShort = 'update products set ? where id = ?';
                db.query(queryUpdateShort,[data,id] , (err,result) => {
                    try {
                        if(err) throw err
                        res.send("Edit Data Success")
                    } catch (error) {
                        res.send(error.message)
                    }
                })
                // update

                // if data not exist, return error message
            }else{
                res.send('Data With id ' + id + ' Not Found')
            }
        } catch (error) {
            res.send(err.message)
        }
    })
})

app.listen(PORT , () => console.log('API RUNNING ON PORT ' + PORT))


app.delete('/product/:id' , (req,res) => {
    const id = req.params.id
    db.query('select * from products where id = ?' , id , (err,result) => {
        try {
            if(err) throw err
            if(result.length > 0){
                const sqlQuery = 'delete from products where id = ?'
                db.query(sqlQuery , id , (err,result) => {
                    try {
                        if(err) throw err
                        res.send('Delete Data Success !')
                    } catch (error) {
                        res.send(error.message)
                    }
                })
            }else{
                res.send("Data with id " + id + ' Not found')
            }
        } catch (error) {
            res.send(error.message)
        }
    })
})

