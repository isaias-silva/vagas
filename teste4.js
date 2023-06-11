var data = require("./fakeData");


/**
 * @comentando_as_alterações : id extraído do objeto query, 'id' usado como atributo de busca,
 verificação da existência do user, caso ele exista é verificado se os atributos name e job existem,
 se apenas os atributos existentes em body são alterados.
 *  */



module.exports = function (req, res) {

    const { id } = req.query;
    if (id) {
        const reg = data.find(d => d.id == id);
        if (reg) {

            const { name, job } = req.body

            reg.name = name ? name : reg.name;

            reg.job = job ? job : reg.job;


            res.send(reg);
        } else {
            res.status(404).send("usuário não encontrado")
        }

    } else {
        res.status(400).send("id inválido")
    }

};