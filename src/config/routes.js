const express = require('express')

module.exports = function (server) {
   // definir URL base para todos os end points
   const router = express.Router()
   server.use('/api', router)

   // end points Ciclo de Pagamento
   const BillingCycle = require('../api/billingCycle/billingCycleService')
   BillingCycle.register(router, '/billingCycles')

}
