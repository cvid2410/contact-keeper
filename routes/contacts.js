const express = require ("express");

const router = express.Router();

// @route  GET api/contacts
// @desc   Get all users contacts 
// @access Private	

router.get("/", (req,res)=> {
	res.send("Get all contacts");

});

// @route  GET api/contacts
// @desc   Add new contacts
// @access Private	

router.post("/:id", (req,res)=> {
	res.send("add contacts");

});

// @route  GET api/contacts/:id
// @desc   Update contacts
// @access Private	

router.put("/", (req,res)=> {
	res.send("Update a contact");

});

// @route  GET api/contacts/:id
// @desc   Delete contacts
// @access Private	

router.delete("/:id", (req,res)=> {
	res.send("Delete a contact");

});


module.exports = router;