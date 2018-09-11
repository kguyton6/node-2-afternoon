module.exports = {
    create: (req, res, next) => {
      const dbInstance = req.app.get('db')
      const {name, description, price, imageurl} = req.body

      dbInstance.create_product([name, description, price, imageurl])
      .then(() => res.sendStatus(200))
      .catch(err => {
          res.status(500).send({errorMessage: "Oops, something went wrong"}) 
          console.log(err)
      })

    },


    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_product(params.id)
        .then((product) => res.status(200).send(product))
        .catch(err => { res.status(500).send({errorMessage: "Ooops, something went wrong"})
        console.log(err)
        })
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops, something went wrong"})
            console.log(err)
        })
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.update_product([params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Ooops, something went wrong"})
            console.log(err)
        })
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.delete_product(params.id)
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Ooops, something went wrong"})
            console.log(err)
        })
    },

}