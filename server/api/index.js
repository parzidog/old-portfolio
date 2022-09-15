const router = require('express').Router();

router.use('/jobs', require('./jobs'));

router.use('/schools', require('./schools'));

router.use('/projects', require('./projects'));

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router;