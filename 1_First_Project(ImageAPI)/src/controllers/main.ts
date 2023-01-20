import Express from 'express';
const router = Express.Router();

router.get('/', (req, res) => {
  console.log('Starting the main route');
  res.send(`<h2>Please write the name of selected image in the URL</h2> <p><h3>The selected options: SadFace, SmileFace, or ShyFace</h3></p>`);
});

module.exports = router;
