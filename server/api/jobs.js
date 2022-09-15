const router = require('express').Router()
const {Job} = require('../db')

// GET /api/jobs
router.get('/', async (req, res, next) => {
  try {
    const jobs = await Job.findAll()
    res.json(jobs)
  }
  catch (error) {
    next(error)
  }
})

// POST /api/jobs
router.post('/', async(req,res,next)=>{
  try{
    res.send(await Job.create(req.body))
  }
  catch(error){
    console.log(error)
  }
})

// GET /api/jobs/:id
router.get('/:id', async (req, res, next) => {
  try {
    const job = await Job.findByPk(req.params.id)
    res.json(job)
  }
  catch (error) {
    next(error)
  }
})

// DELETE /api/jobs/:jobId
router.delete("/:id", async (req, res, next)=>{
  try{
    const job = await Job.findByPk(req.params.id);
    await job.destroy();
    res.send(job);
  }
  catch(error){
    console.log(error)
  }
})


// PUT /api/jobs/:id
router.put('/:id', async (req, res, next) => {
  try {
    const job = await Job.findByPk(req.params.id);
    res.send(await job.update(req.body));
  } catch (error) {
    next(error);
  }
});


module.exports = router