const {Client} = require('pg');

const client = new Client({

       host:"localhost",
       port: 5432,
       user: "postgres",
       password:"postgres",
       database: "mydb"

})

client.connect();

client.query(`SELECT * FROM students`, (err, res) =>{

    if(!err){
        console.log(res.rows);
    }

    else{
        console.log(err.message);
    }

    client.end;
})