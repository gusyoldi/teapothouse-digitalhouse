const { Router } = require('express')
const router = Router()
const productsApiController = require('../../controllers/api/productsApiController')

router.get('/products/', productsApiController.list)
router.get('/products/:id', productsApiController.detail)

module.exports = router