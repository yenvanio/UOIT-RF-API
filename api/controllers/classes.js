const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const moment = require('moment');

const logic = require('../logic/classes.js');

router.use(bodyParser.urlencoded({ extended: true }));

/**
 * Converts the day of the week from integer to string
 * @param {Number} num
 */
function convertToDay(num) {
  switch (num) {
    case 0:
      return 'S';
    case 1:
      return 'M';
    case 2:
      return 'T';
    case 3:
      return 'W';
    case 4:
      return 'R';
    case 5:
      return 'F';
    case 6:
      return 'S';
    default:
      return null;
  }
}

/**
 * Get classes based on query parameters
 * @param {Any} req
 * @param {Any} res
 */
router.get('/all', (req, res) => {
  // Validating Date Format
  const date = req.query.date || moment().format('YYYY-MM-DD');
  if (!moment(date, 'YYYY-MM-DD').isValid()) {
    res.statusCode = 400;
    res.json({ errors: ['Invalid Date Format! Use (YYYY-MM-DD)'] });
  }
  // Validating Time Format
  const startTime = req.query.start_time || moment().format('HH:mm:ss');
  const space = ' ';
  const endTime = req.query.end_time || moment(date + space + startTime).add(1, 'hours').format('HH:mm:ss');

  // Gathering Parameters
  const day = convertToDay(moment(date).day()); // Get day from moment
  const building = req.query.building || '';

  // Assemble the query data in JSON
  const queryData = {
    day,
    date,
    startTime,
    endTime,
    building,
  };

  // Retrieve data from the Database
  logic.getClassesByParam(queryData, (err, queryResult) => {
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
 * Get future classes in a room given a class
 * @param {Any} req
 * @param {Any} res
 */
router.get('/future', (req, res) => {
  // Validating Date Format
  const date = req.query.date || moment().format('YYYY-MM-DD');
  if (!moment(date, 'YYYY-MM-DD').isValid()) {
    res.statusCode = 400;
    res.json({ errors: ['Invalid Date Format! Use (YYYY-MM-DD)'] });
  }

  // Validating Time Format
  const startTime = req.query.start_time || moment().format('HH:mm:ss');

  // Gathering Parameters
  const day = convertToDay(moment(date).day()); // Get day from moment
  const room = req.query.room || '';

  // Assemble the query data in JSON
  const queryData = {
    day,
    date,
    startTime,
    room,
  };

  // Retrieve data from the Database
  logic.getFutureClasses(queryData, (err, queryResult) => {
    if (err) {
      res.statusCode = 500;
      res.json({ errors: ['Unable to retrieve classes!'] });
    } else {
      res.statusCode = 200;
      res.json({ classes: queryResult });
    }
  });
});

// Add functions for classes module to export
module.exports = router;
