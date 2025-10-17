// CRUD operations
use("CrudDb")
console.log(db)


// CREATE
db.createCollection("courses")

db.courses.insertOne({
    name: "Harry web dev free course",
    price: 0,
    assignments: 12,
    projects: 45
})

db.courses.insertMany([{
    "name": "Harry web dev free course",
    "price": 0,
    "assignments": 12,
    "projects": 45
},
{
    "name": "Jane's Python Bootcamp",
    "price": 49,
    "assignments": 20,
    "projects": 10
},
{
    "name": "React Essentials by Mike",
    "price": 0,
    "assignments": 8,
    "projects": 5
},
{
    "name": "Fullstack Java Course",
    "price": 99,
    "assignments": 25,
    "projects": 18
},
{
    "name": "CSS Mastery Free Series",
    "price": 0,
    "assignments": 5,
    "projects": 12
},
{
    "name": "Node.js Crash Course",
    "price": 25,
    "assignments": 15,
    "projects": 8
},
{
    "name": "Intro to Data Structures",
    "price": 35,
    "assignments": 18,
    "projects": 6
},
{
    "name": "Advanced Vue.js Guide",
    "price": 75,
    "assignments": 22,
    "projects": 14
},
{
    "name": "Machine Learning with Python",
    "price": 120,
    "assignments": 30,
    "projects": 20
},
{
    "name": "Basic HTML & CSS",
    "price": 0,
    "assignments": 10,
    "projects": 4
}

])


//READ
let a = db.courses.find({ price: 0 })
//console.log(a)

//console.log(a.count())

console.log(a.toArray())

let b = db.courses.findOne({ price: 0 })
console.log(b)


//UPDATE
//db.collection.updateOne(filter, update, options)
//db.collection.updateMany(filter, update, options)
db.courses.updateOne({ price: 0 }, { $set: { price: 100 } })

db.courses.updateMany({ price: 0 }, { $set: { price: 1000 } })


//DELETE
db.courses.deleteOne({ price: 100 })

db.courses.deleteMany({ price: 100 })

//https://www.mongodb.com/docs/manual/reference/operator/query/