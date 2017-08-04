const express = require('express')

module.exports = function(server) {

    // Defenir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // rotas de ciclo de Pagamentos
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycle')
}
