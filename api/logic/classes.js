const db = require('../../config/db');

// Connect to mysql database
db.initialize((err) => {
  if (err) {
    throw err;
  }
});

/**
 * Get Classes based on parameters
 * @param {JSON Object} data
 * day, date, start_time, end_time, building
 * @param {Callback} callback
 */
const getClassesByParam = function (data, callback) {
  const sql = `
      SELECT DISTINCT(class.room), building.name AS building, building.location, course.isLab FROM class 
          LEFT JOIN course ON class.fk_course_crn = course.crn
          LEFT JOIN building ON class.fk_building_id = building.id
              WHERE class.start_date <= '${data.date}' AND class.end_date >= '${data.date}'
              AND room NOT IN
                  (SELECT room FROM class 
                      WHERE class.start_date <= '${data.date}' AND class.end_date >= '${data.date}'
                      AND 
                        (class.start_time >= '${data.start_time}' AND class.start_time <= '${data.end_time}')
                      OR
                        (class.end_time >= '${data.start_time}' AND class.end_time <= '${data.end_time}')
                      GROUP BY room )`;

  db.query(sql, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

/**
 * Get Future Classes given a Class
 * @param {JSON Object} data
 * day, date, start_time, room
 * @param {Callback} callback
 */
const getFutureClasses = function (data, callback) {
  const sql = `
    SELECT class.room, class.start_time, class.end_time, course.title, course.code FROM class 
        LEFT JOIN course ON class.fk_course_crn = course.crn
              WHERE class.day = '${data.day}'
              AND class.room = '${data.room}'
              AND '${data.date}' >= class.start_date AND '${data.date}' <= class.end_date
              AND '${data.start_time}' <= class.start_time
        ORDER BY class.start_time ASC`;

  db.query(sql, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

// Add functions for classes module to export
module.exports = {
  getClassesByParam,
  getFutureClasses,
};
