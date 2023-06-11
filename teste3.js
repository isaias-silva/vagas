var data = require("./fakeData");

/**
 * @comentando_as_alterações : id extraído do objeto query, 'id' usado como atributo de busca ao invés de 'name',
 *  busca do user com filter ao invés do loop FOR, verificação da existência do user, caso ele exista é deletado com splice,
 * um método presente no tipo Array que remove um item.  */




module.exports = function (req, res) {

    const { id } = req.query
    if(id){
        const [user] = data.filter(value => value.id == id)
        if(user){
            data.splice(data.indexOf(user), 1)
        
            res.send(`usuário ${user.name} deletado com sucesso.`);

        }else{
            res.status(404).send("usuário não encontrado.")
        }

    }else{
        res.status(400).send("id inválido")
    }

};