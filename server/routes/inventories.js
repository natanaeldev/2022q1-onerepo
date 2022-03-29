const router = require('express').Router();
const { getInventories } = require('../controllers/inventories');

/**
 * GET /api/v1/inventories
 */
router.get('/', getInventories);

module.exports = router;
