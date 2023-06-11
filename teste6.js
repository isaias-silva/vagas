/**
 * @comentario : middleware criado para barrar acesso,
 *  o middleware checa se a propriedade acessclass nos header da requisição
 * tem o valor 'admin' caso contrário ele nega o acesso.
 * */
 


module.exports=(req, res, next) => {
   
    const accessClass = req.headers['acessclass'];
  
    if (accessClass === 'admin') {
      
      next();
    } else {
      res.status(401).send({ error: 'Acesso não autorizado' });
    }
  };

  