'use strict'

const { validateRequiredParameters } = require('../../helpers/validation')
/**
 * API Crypto Loans endpoints
 * @module Loan
 * @param {*} superclass
 */
const Loan = superclass => class extends superclass {
  /**
   * Get Crypto Loans Income History (USER_DATA)<br>
   *
   * GET /sapi/v1/loan/income<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-crypto-loans-income-history-user_data}
   *
   * @param {string} asset
   * @param {object} [options]
   * @param {string} [options.type] - All types will be returned by default.<br>
   *     Enum：borrowIn, collateralSpent, repayAmount, collateralReturn(Collateral return after repayment), addCollateral, removeCollateral, collateralReturnAfterLiquidation.
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - default 20, max 100
   * @param {number} [options.recvWindow]
   *
   */
  loanHistory (asset, options = {}) {
    validateRequiredParameters({ asset })

    return this.signRequest(
      'GET',
      '/sapi/v2/loan/income',
      Object.assign(options, { asset })
    )
  }

  loanData (options = {}) {
    return this.signRequest(
      'GET',
      '/sapi/v2/loan/flexible/loanable/data',
      options)
  }

  loanBorrow (loanCoin, loanAmount, collateralCoin, options = {}) {
    return this.signRequest(
      'POST',
      '/sapi/v2/loan/flexible/borrow',
      Object.assign(options, {
        loanCoin,
        loanAmount,
        collateralCoin
      }))
  }

  loanAdjustLtv (loanCoin, collateralCoin, adjustmentAmount, direction, options = {}) {
    return this.signRequest(
      'POST',
      '/sapi/v2/loan/flexible/adjust/ltv',
      Object.assign(options, { loanCoin, collateralCoin, adjustmentAmount, direction }))
  }

  loanOrders (options = {}) {
    return this.signRequest(
      'GET',
      '/sapi/v2/loan/flexible/ongoing/orders',
      options)
  }

  loanRepay (loanCoin, collateralCoin, repayAmount, options = {}) {
    return this.signRequest(
      'POST',
      '/sapi/v2/loan/flexible/repay',
      Object.assign(options, { loanCoin, collateralCoin, repayAmount }))
  }
}
module.exports = Loan
