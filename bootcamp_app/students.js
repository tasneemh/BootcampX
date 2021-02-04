const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
  }
);
const query = `SELECT students.id as student_id, students.name as   
  student_name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;`;
  const values = [`%${process.argv[2]}%`, process.argv[3] || 5];

pool.query(
 query, values
).then(res =>{
  res.rows.forEach(user =>{
    console.log(`${user.student_name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err =>{
  console.err('querry error: ', err.stack);
});

// pool.connect((err) =>{
//   if (err){
//     throw new Error(err);
//   } else {
//     console.log('Connected');
//   }
// });