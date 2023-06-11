const data = require("./fakeData");
const {accessForUser} =require('./teste5')

/**
 * @comentando_as_alterações : id é um atributo de busca mais válido que 'name',
 * pois usuários podem ter o mesmo nome mas nunca o mesmo id.
 *o id pode ser extraido do objeto query vindo da requisição, 
 o metodo filter disponível no tipo Array assume o papel do loop 'FOR' por ser mais performático. */
 

const getUser = (req, res, next) => {

    const { id } = req.query;
    if (id) {

        const [user] = data.filter(value => value.id == id)

        if (user) {

            if (accessForUser[id]) {
                accessForUser[id]++

            } else {
                accessForUser[id] = 1
            }
         
            res.send(user)
        } else {
            next("usuário não encontrado")

        }

    } else {
        return next("id inválido")

    }

};

const getUsers = (req, res, next) => {

    res.send(data);

};

module.exports = {
    getUser,
    getUsers
};