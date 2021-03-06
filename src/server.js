const express =require("express")
const server = express()
//pegar o banco de dados

const db = require("./database/db.js")



//configurar pasta
server.use(express.static("public"))
//habilitar o uso body na requisição
server.use(express.urlencoded({extended:true}))

//utilizando template engine
const nunjucks =require("nunjucks")
nunjucks.configure("src/views",{
    express:server,
    noCache:true
})


//configurar caminhos para aplicaçao
//req: requisição   res:resposta
server.get("/",(req, res) =>{
     return res.render("index.html", {title:"um título"})

})

server.get("/create_point",(req, res) =>{

   // console.log(req.query)

   return res.render("create_point.html")

})
server.post("/savepoint",(req, res)=>{

    //console.log(req.body)
    //inseri dados no banco de dados

 //inserir dados no banco de dados
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
  `
       const values= [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
        
      ]

      function afterInsertData(err){
          if(err){
              return console.log(err)
              return res.send("Erro no cadastro")
          }
      console.log("Cadastro com suceso")
      console.log(this)
      }
      db.run(query,values, afterInsertData) 


    return res.render("create_point.html", { saved:true})
})
server.get("/search",(req, res) =>{
    const search = req.query.search

    if (search == "") {
    //pasta vazia
    return res.render("search-result.html" ,{total: 0 })
    }
 //pegar dados do banco
     db.all(`SELECT * FROM places WHERE city LIKE'%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
     }
     const total = rows.length
     return res.render("search-result.html" ,{places: rows, total:total})

    })

   
 })

//ligar o servidor
server.listen(3000)
