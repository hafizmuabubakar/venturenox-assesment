const router = require('express').Router();
const Tenant = require('../Models/Tenant.model');


router.get('/', async (req, res)=> {

    const tenants = await Tenant.query();
	res.status(200).json({ message: tenants });

});

router.get('/:id', async (req, res)=> {

    let id = req.params.id;

    const tenants = await Tenant.query().where( { id: id } );
	res.status(200).json({ message: tenants });

});

router.delete('/:id', async (req, res)=> {

    let id = req.params.id;

    const tenants = await Tenant.query().delete().where( { id: id } );
	res.status(200).json({ message: tenants });

});

router.patch('/:id', async (req, res)=> {

    let id = req.params.id;
    let data = req.body.data;

    const tenants = await Tenant.query().patch(data).where( { id: id } );
	res.status(200).json({ message: tenants });

});

router.post('/', async (req, res)=> {

    let data = req.body.data;

    const tenants = await Tenant.query().insert(data);
	res.status(200).json({ message: tenants });

});

module.exports = router;