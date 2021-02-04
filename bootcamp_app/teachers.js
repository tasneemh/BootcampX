const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
  }
);

pool.query(
  `SELECT teachers.name as teacher, cohorts.name as cohort, count(assistance_requests) as total_assistances
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '%${process.argv[2]}%'
  GROUP BY teachers.name, cohorts.name
  ORDER BY teacher;`
).then(res =>{
  res.rows.forEach(user=>{
    console.log(`${process.argv[2]}: ${user.teacher}`);
  })
}).catch(err=>{
  console.err('query error ', err.stack);
});



