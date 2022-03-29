const router = require('express').Router();
const { getWarehouses } = require('../controllers/warehouses');

/**
 * GET /api/v1/warehouses
 */
router.get('/', getWarehouses);

module.exports = router;
