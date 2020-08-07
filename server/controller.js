module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    },
    addProduct: (req, res) => {
        const db = req.app.get('db');
        const {name, price, img} = req.body
        db.create_product([name, price, img]).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
        db.delete_product(id).then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db');
        const {id, name, price, img} = req.body
        db.update_product([id, name, price, img])
        .then(() => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    }
}
