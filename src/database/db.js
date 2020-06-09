
//importar dependencia sqlite
const sqlite3 = require("sqlite3").verbose()
//criar objeto que ira fazer alteracoes no banco de dados
const db= new sqlite3.Database("./src/database/database.db")
module.exports = db

// utilizar os objetos de banco de dados para nossa aplicação


//Explicação kkkk
// utilizar
//db.serialize(()=>{
 /*   //crir tabela
    db.run(`
    CREATE TABLE IF NOT EXISTS places(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );

    `)
   //inserir dados 
   const query=`
   INSERT INTO places(
       image,
       name,
       address,
       address2,
       state,
       city,
       items

    )VALUES(?,?,?,?,?,?,?);



         const values= [
            "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            "Papersider",
            " Guilherme gemballa, Jardim América",
            " número 67",
            " Santa catarina",
            "Rio do Sul",
            "Papeis e papelão"
        ]

        function afterInsertData(err){
            if(err){
                return console.log(err)
            }
        console.log("Cadastro com suceso")
        console.log(this)
        }
        db.run(query,values, afterInsertData) 
      */
        
  
   //deletar dados
/*
   db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    if(err){
      return console.log(err)
  }
console.log("Registro deletado com sucesso")
   })
    ///consultar dados
    //db.all(`SELECT * FROM places`,function(err, rows){
     //   if(err){
   //         return console.log(err)
   //  }
   //  console.log("Aqui estao os registros: ")
   //  console.log(rows)
   // })

})
*/