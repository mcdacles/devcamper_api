const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
} = require('../controllers/bootcamps');

const router = express.Router();

// With Controllers

router.route('/').get(getBootcamps).post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

// Alternative way of creating a router
// router.get('/', (req, res) => {
//   // simple way to send response
//   // res.json({ name: 'Brad' });

//   // change status
//   // res.sendStatus(400);

//   res.status(200).json({ success: true, msg: 'Show all bootcamps' });
// });

module.exports = router;
