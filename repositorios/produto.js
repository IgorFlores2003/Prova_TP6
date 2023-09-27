const produtos = [
    {
        nome: "Geladeira",
        preco: 4599.99,
        peso: 98.5,
        cor: "branca",
        marca: "Eletrolux",
        id: 1
    }
]
let ultimo_id = 1

const produtoRepositorio = () => {
    return {
        get: (id) => {
            const produtosFiltrados = produtos.filter(prod => prod.id == id)

            if(produtosFiltrados.length == 0){
                throw new Error(JSON.stringify({
                    status: 404,
                    msg: "Produto não informado!!"
                }))
            }else{
                return produtosFiltrados[0]
            }
        }
        ,
        crate: (id) =>{

            if(produtosFiltrados.length == 0){
                throw new Error(JSON.stringify({
                    status: 404,
                    msg: "Produto não informado corretamente!!"
                }))
            }else{
                 novoproduto=  [{
                    nome: "Fogão",
                 preco: 3000.99,
                 peso: 40,
                 cor: "branca",
                 marca: "Eletrolux",
                 id: 2
                }
                ]
                return produtos.concat.novoproduto
            }
        }
,
        destroy: (id) =>{
            const produtosFiltrados = produtos.filter(prod => prod.id == id)

            if(!produtosFiltrados.id == id){
                throw new Error(JSON.stringify({
                    status: 404,
                    msg: "Produto não encontrado!!"
                }))
            }else{
                produtosFiltrados.splice(1,7)
                
                }
            }
        }
        }

    

module.exports = {
    produtoRepositorio
}