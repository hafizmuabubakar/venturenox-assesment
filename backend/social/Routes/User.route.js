const router = require('express').Router();
const User = require('../Models/User.model');


router.get('/', async (req, res)=> {

    const Users = await User.query();
	res.status(200).json({ message: Users });

});

router.get('/:id', async (req, res)=> {

    let id = req.params.id;

    const Users = await User.query().where( { id: id } );
	res.status(200).json({ message: Users });

});

router.delete('/:id', async (req, res)=> {

    let id = req.params.id;

    const Users = await User.query().delete().where( { id: id } );
	res.status(200).json({ message: Users });

});

router.patch('/:id', async (req, res)=> {

    let id = req.params.id;
    let data = req.body.data;

    const Users = await User.query().patch(data).where( { id: id } );
	res.status(200).json({ message: Users });

});

router.post('/', async (req, res)=> {

    let data = req.body.data;

    const Users = await User.query().insert(data);
	res.status(200).json({ message: Users });

});

module.exports = router;