'use strict'

const { validateRequiredParameters } = require('../../helpers/validation')

/**
 * API futures endpoints
 * @module Futures
 * @param {*} superclass
 */
const Earn = superclass => class extends superclass {
  /** 获取活期产品持仓 */
  simpleEarnPosition (size, options = {}) {
    validateRequiredParameters({ size })
    return this.signRequest(
      'GET',
      '/sapi/v1/simple-earn/flexible/position',
      Object.assign(options, {
        size
      })
    )
  }

  /** 获取wbeth 汇率 */
  wbethRate (options = {}) {
    return this.signRequest(
      'GET',
      '/sapi/v1/eth-staking/eth/history/rateHistory',
      options
    )
  }

  /** 申购赚币 **/
  simpleEarnSubscribe (productId, amount, options = {}) {
    validateRequiredParameters({ productId, amount })
    return this.signRequest(
      'POST',
      '/sapi/v1/simple-earn/flexible/subscribe',
      Object.assign(options, {
        productId,
        amount
      })
    )
  }

  /** 赎回赚币 **/
  simpleEarnRedeem (productId, amount, options = {}) {
    validateRequiredParameters({ productId, amount })
    return this.signRequest(
      'POST',
      '/sapi/v1/simple-earn/flexible/redeem',
      Object.assign(options, {
        productId,
        amount
      })
    )
  }

  /** 赚币列表 **/
  simpleEarnList (options = {}) {
    return this.signRequest(
      'GET',
      '/sapi/v1/simple-earn/flexible/product/list',
      options
    )
  }
}

module.exports = Earn
