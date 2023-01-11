const { Router } = require('express')
const router = Router()
const apiUsers = require('../api/users')
const apiProducts = require('../api/products')

router.use(apiUsers)
router.use(apiProducts)
router.use('/img/', (req, res) => {
    const tag = `/img${req.path}`
    res.render('api/images', { tag })
})

module.exports = router