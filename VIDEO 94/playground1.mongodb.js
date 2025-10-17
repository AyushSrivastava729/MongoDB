

use('sigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('course').insertMany([
  {
    "name": "Java",
    "Price": 20000,
    "Instructor": "Striver"
  },
  {
    "name": "Python",
    "Price": 15000,
    "Instructor": "Angela Yu"
  },
  {
    "name": "Data Structures",
    "Price": 18000,
    "Instructor": "Abdul Bari"
  },
  {
    "name": "Web Development",
    "Price": 22000,
    "Instructor": "Colt Steele"
  },
  {
    "name": "Machine Learning",
    "Price": 25000,
    "Instructor": "Andrew Ng"
  },
  {
    "name": "C++",
    "Price": 19000,
    "Instructor": "Love Babbar"
  },
  {
    "name": "React JS",
    "Price": 21000,
    "Instructor": "Maximilian Schwarzmüller"
  },
  {
    "name": "DevOps",
    "Price": 23000,
    "Instructor": "Kelsey Hightower"
  },
  {
    "name": "Cloud Computing",
    "Price": 24000,
    "Instructor": "Jeff Dean"
  },
  {
    "name": "Android Development",
    "Price": 20000,
    "Instructor": "Philipp Lackner"
  }
]);


// Print a message to the output window.
console.log(`Done inserting Data`);
