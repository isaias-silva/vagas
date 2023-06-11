var data = require("./fakeData");

/**
 * @comentando_as_alterações : job e name podem ser extraidos do objeto body da requisição, 
 * se job e name não existirem a criação não ocorre e a função next envia a mensagem de erro. 
 * é verificado se o usuário já existe (caso possua o mesmo 'name' e o mesmo 'job'), caso o contrário
 * um id aleatório é gerado e o novo user é criado. */



module.exports = function (req, res) {

    const { job, name } = req.body

    if (!job || !name) {
    res.status(400).send("name or job invalid")
    } else {

       

        const [userExists] = data.filter(value => value.name == name && value.job == job)

        if (userExists) {
            res.status(400).send("usuário já existe")
        }else{
            const id = parseInt(Math.random() * 9999)
            const newUser = {
                name,
                job,
                id
            }
    
            data.push(newUser)
            res.send(newUser);
        }

    }

};