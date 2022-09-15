const router = require('express').Router()
const {Project} = require('../db')

// GET /api/projects
router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll()
    res.json(projects)
  }
  catch (error) {
    next(error)
  }
})

// POST /api/projects
router.post('/', async(req,res,next)=>{
  try{
    res.send(await Project.create(req.body))
  }
  catch(error){
    console.log(error)
  }
})

// GET /api/projects/:projectId
router.get('/:projectId', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId)
    res.json(project)
  }
  catch (error) {
    next(error)
  }
})

// DELETE /api/projects/:projectId
router.delete("/:projectId", async (req, res, next)=>{
  try{
    const project = await Project.findByPk(req.params.projectId);
    await project.destroy();
    res.send(project);
  }
  catch(error){
    console.log(error)
  }
})


// PUT /api/projects/:id
router.put('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    res.send(await project.update(req.body));
  } catch (error) {
    next(error);
  }
});


module.exports = router