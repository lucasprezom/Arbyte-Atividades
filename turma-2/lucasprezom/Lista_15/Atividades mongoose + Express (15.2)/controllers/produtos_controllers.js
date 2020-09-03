const mongoose = require('mongoose')

let database
let produtoSchema

const connectDatabase = async () => {
    database = database || mongoose.connect('mongodb://localhost:27017/produtosAT',{
    useNewUrlParser: true,
    useUnifiedTopology: true

})

return database

}

const createProdutoSchema = async (database) => {
    if (produtoSchema) {
        return;
    }

    userSchema = new database.Schema({
        nome: String,
        preco: String,
        estoque: Number,
        codBarras: String
    }, {
        timestamps: true
    })

    database.model('Produto', produtoSchema)

} 

// CRUD

const criarProduto = async ({nome,preco,estoque,codBarras}) => {
    let database = await mongoose.connect()
    await createProdutoSchema(database)

    const {Produto} = database.models

    const produto = new Produto({
        nome,
        preco,
        estoque,
        codBarras
    })
    
    produto.save()

    return produto 
}

const readProduto = async () => {
    let database = await connectDatabase()
    await createProdutoSchema(database)
    
    const {Produto} = database.models

    return Produto.find()

}

const updateProduto = async ({id}, {name, preco, estoque, codBarras}) => {
    let database = await connectDatabase()
        await createProdutoSchema(database);

        const {Produto} = database.models

    return Produto.updateOne({_id: id}, {nome, preco, estoque, codBarras})
}


const deleteProduto = async ({id}) => {
    let database = await connectDatabase()
    await createProdutoSchema(database)

    const {Produto} = database.models
    
    return Produto.deleteOne({_id: id})

    }

    module.exposts = {
        criarProduto,
        readProduto,
        updateProduto,
        deleteProduto
    }
