const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

const logic = require('../logic/rooms.js');

router.use(bodyParser.urlencoded({ extended: true }));

/**
 * Get a weekly schedule for a room
 * @param {Any} req
 * @param {Any} res
 */
router.get('/schedule', (req, res) => {
  // Get the room value
  const room = req.query.room || '';

  // Assemble the query data in JSON
  const queryData = {
    room,
  };

  // Retrieve data from the Database
  logic.getRoomSchedule(queryData, (err, queryResult) => {
    if (err) {
      res.statusCode = 500;
      res.json({ errors: ['Unable to retrieve classes!'] });
    } else {
      res.statusCode = 200;
      res.json({ classes: queryResult });
    }
  });
});

/**
 * Get a list of all the rooms
 * @param {Any} req
 * @param {Any} res
 */
router.get('/all', (req, res) => {
  // Retrieve data from the Database
  logic.getRooms((err, queryResult) => {
    if (err) {
      res.statusCode = 500;
      res.json({ errors: ['Unable to retrieve rooms!'] });
    } else {
      res.statusCode = 200;
      res.json({ rooms: queryResult });
    }
  });
});

/**
 * Get a list of all the rooms
 * @param {Any} req
 * @param {Any} res
 */
router.get('/:id', (req, res) => {
  // Get the room value
  const room = req.params.id || '';

  // Assemble the query data in JSON
  const queryData = {
    room,
  };
  // Retrieve data from the Database
  logic.getRoom(queryData, (err, queryResult) => {
    if (err) {
      res.statusCode = 500;
      res.json({ errors: ['Unable to retrieve room!'] });
    } else {
      res.statusCode = 200;
      res.json({ details: queryResult });
    }
  });
});

// Add functions for classes module to export
module.exports = router;
