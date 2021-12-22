'use strict'

const { Model } = require('objection')

class User extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'user_profiles'
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.


  static get jsonSchema() {
    return {
      type: 'object',
      required: ['first_name'],

      properties: {
        first_name: { type: 'string', minLength: 1, maxLength: 255 },
        last_name: { type: 'string', minLength: 1, maxLength: 255 },
        department: { type: 'string', minLength: 1, maxLength: 255 },
        designation: { type: 'string', minLength: 1, maxLength: 255 },
        tenant_id: { type: 'integer' },
        image_url: { type: 'string', minLength: 1, maxLength: 255 },
        city: { type: 'string', minLength: 1, maxLength: 255 },
        country: { type: 'string', minLength: 1, maxLength: 255 },
        bio: { type: 'string', minLength: 1, maxLength: 255 },
        social_links: {
             type: 'object', 
             properties:  {facebook:{type:'string'}}
             },
        employee_id: { type: 'integer' },
      },
    }
  }

  static get relationMappings() {
    const Tenant = require('./Tenant.model')

    return {
      users: {
        relation: Model.ManyToManyRelation,

        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one.
        modelClass: Tenant,

        join: {
          from: 'tenant_profile.tenant_id',
          to: 'user_profile.tenant_id',
        },
      },
    }
  }
}

module.exports = User