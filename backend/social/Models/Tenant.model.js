'use strict'

const { Model } = require('objection')

class Tenant extends Model {
 
  static get tableName() {
    return 'tenant_profile'
  }

  
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name','address', 'city', 'state', 'country', 'zip_code', 'phone', 'web_url'],

      properties: {
        name: { type: 'string', minLength: 1, maxLength: 255 },
        address: { type: 'string', minLength: 1, maxLength: 255 },
        city: { type: 'string', minLength: 1, maxLength: 255 },
        state: { type: 'string', minLength: 1, maxLength: 255 },
        country: { type: 'string', minLength: 1, maxLength: 255 },
        zip_code: { type: 'string', minLength: 1, maxLength: 255 },
        phone: { type: 'string', minLength: 1, maxLength: 255 },
        web_url: { type: 'string', minLength: 1, maxLength: 255 },
      },
    }
  }

 
}

module.exports = Tenant