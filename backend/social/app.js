const express = require('express');
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require('./utilities/producer');
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
// const databaseConfig = require('./database/DatabaseConfig');
const Tenant = require('./Routes/Tenant.route');
const User = require('./Routes/User.route');
const initDB = require('./database/initDB');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initDB.initDB();

app.use('/tenant', Tenant);
app.use('/user', User);

app.listen(process.env.PORT || 4000, async () => {
	
	console.log('App started at port', process.env.PORT || 4000);
	await initProducer();

});