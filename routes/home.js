const path = require('path');

const express = require('express');

const rootDir = require('../utilities/root_path');

const router = express.Router();

router.get('/', (req,res)=>{
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = router;