const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/*-submit', function(req, res, next){
  res.locals['serviceName'] = 'Submit emissions data for ETS'
  next()
})

router.get('/*-transfer', function(req, res, next){
  res.locals['serviceName'] = 'Transfer your ETS allowances'
  next()
})




module.exports = router
