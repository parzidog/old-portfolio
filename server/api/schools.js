const router = require('express').Router()
const {School} = require('../db')

// GET /api/schools
router.get('/', async (req, res, next) => {
  try {
    const schools = await School.findAll()
    res.json(schools)
  }
  catch (error) {
    next(error)
  }
})

// POST /api/schools
router.post('/', async(req,res,next)=>{
  try{
    res.send(await School.create(req.body))
  }
  catch(error){
    console.log(error)
  }
})

// GET /api/schools/:schoolId
router.get('/:schoolId', async (req, res, next) => {
  try {
    const school = await School.findByPk(req.params.schoolId)
    res.json(school)
  }
  catch (error) {
    next(error)
  }
})

// DELETE /api/schools/:schoolId
router.delete("/:schoolId", async (req, res, next)=>{
  try{
    const school = await School.findByPk(req.params.schoolId);
    await school.destroy();
    res.send(school);
  }
  catch(error){
    console.log(error)
  }
})


// PUT /api/schools/:id
router.put('/:id', async (req, res, next) => {
  try {
    const school = await School.findByPk(req.params.id);
    res.send(await school.update(req.body));
  } catch (error) {
    next(error);
  }
});


module.exports = router