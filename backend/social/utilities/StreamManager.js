const Tenant = require('../Models/Tenant.model');
const User = require('../Models/User.model');

const processMessage = async (kafkaMessage) => {

	kafkaMessage.event_name === "user_created" ? 
		await User.query().insert(kafkaMessage.properties, '*') : 
		await Tenant.query().insert(kafkaMessage.properties, '*');

};

module.exports = { processMessage };

