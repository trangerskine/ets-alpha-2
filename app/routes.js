const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/*-submit', function(req, res, next){
  res.locals['serviceName'] = 'Submit emissions data for ETS'
  next()
})
router.get('/*-transfer', function(req, res, next){
  res.locals['serviceName'] = 'Check and transfer allowance for ETS'
  next()
})
router.post("/choose-transfer-route", function(req,res){
  var whichTransfer = req.session.data['whichtransfer']
  if (whichTransfer == "Existing installation"){
    res.redirect("/existing-transfer")
  } else if (whichTransfer == "New installation") {
    res.redirect("/new-transfer")
  }
})

module.exports = router
