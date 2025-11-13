# MongoDB
 This repository contains projects where I’ve used MongoDB to build databases and integrate them into web applications. It includes examples of data modeling, CRUD operations, and working with MongoDB in a Node.js environment.

1. Introduction to MongoDB

MongoDB is a NoSQL, document-oriented database.

Stores data in JSON-like documents (BSON format internally).

No fixed schema (Schema-less).

Supports sharding, replication, indexing, and aggregation.

Great for big data, real-time analytics, and flexible schema apps.

Key terms:

Database: Container for collections.

Collection: Container for documents (like a table in RDBMS).

Document: JSON-like object storing data (like a row in RDBMS).

BSON: Binary JSON format used internally.

2. MongoDB Basic Commands
2.1 Database Commands
Command	Explanation
show dbs	Lists all databases.
use <db_name>	Switches to a database. Creates it if not exists.
db	Shows the current database.
db.dropDatabase()	Deletes the current database.

Example:

use myDB        // Switch to 'myDB'
show dbs        // List all DBs
db              // Show current DB
db.dropDatabase()  // Delete 'myDB'

2.2 Collection Commands
Command	Explanation
show collections	Lists all collections in the current DB.
db.createCollection('name')	Creates a collection explicitly.
db.collection.drop()	Deletes a collection.

Example:

db.createCollection('users')  // Create collection 'users'
show collections             // List collections
db.users.drop()              // Drop 'users' collection

2.3 CRUD Operations
Create

Insert documents into a collection.

Command	Explanation
db.collection.insertOne({doc})	Insert a single document.
db.collection.insertMany([{doc1}, {doc2}])	Insert multiple documents.

Example:

db.users.insertOne({name: "John", age: 25, city: "NY"})
db.users.insertMany([
    {name: "Alice", age: 30},
    {name: "Bob", age: 28}
])

Read

Query documents from a collection.

Command	Explanation
db.collection.find()	Returns all documents.
db.collection.find({field: value})	Filter documents by field.
db.collection.find().pretty()	Pretty print results.

Example:

db.users.find()                 // Get all users
db.users.find({age: 25})        // Users with age 25
db.users.find().pretty()        // Formatted output

Update

Modify existing documents.

Command	Explanation
db.collection.updateOne(filter, update)	Updates first matched document.
db.collection.updateMany(filter, update)	Updates all matched documents.
$set, $inc, $unset	Update operators to modify fields.

Example:

db.users.updateOne({name: "John"}, {$set: {age: 26}})
db.users.updateMany({city: "NY"}, {$inc: {age: 1}})

Delete

Remove documents.

Command	Explanation
db.collection.deleteOne({filter})	Delete first matched document.
db.collection.deleteMany({filter})	Delete all matched documents.

Example:

db.users.deleteOne({name: "Alice"})
db.users.deleteMany({age: {$lt: 30}})

2.4 Query Operators

$eq: Equal

$ne: Not equal

$gt, $gte: Greater than, greater than equal

$lt, $lte: Less than, less than equal

$in, $nin: In, not in array

$and, $or, $not: Logical operators

$exists: Field exists or not

$regex: Pattern match

Example:

db.users.find({age: {$gte: 25, $lte: 30}})
db.users.find({$or: [{city: "NY"}, {city: "LA"}]})
db.users.find({name: {$regex: /^J/}}) // Names starting with J

3. Indexing

Improves query performance.

Types: Single field, compound, unique, text, geospatial.

Command	Explanation
db.collection.createIndex({field: 1})	Ascending index.
db.collection.createIndex({field: -1})	Descending index.
db.collection.getIndexes()	List indexes.
db.collection.dropIndex({field: 1})	Drop an index.
4. Aggregation

Process data in pipelines: filter, group, sort, transform.

Stage	Explanation
$match	Filter documents (like WHERE).
$group	Group documents and apply aggregate functions.
$sort	Sort results.
$project	Select specific fields or compute new fields.
$limit	Limit the number of documents.
$skip	Skip documents.

Example:

db.orders.aggregate([
    {$match: {status: "shipped"}},
    {$group: {_id: "$customerId", total: {$sum: "$amount"}}},
    {$sort: {total: -1}},
    {$limit: 5}
])

5. Data Modeling

Embedded documents: Store related data inside a document.

References: Store references to other documents (like foreign key).

Example of Embedded Document:

db.users.insertOne({
    name: "John",
    orders: [
        {item: "Book", qty: 2},
        {item: "Pen", qty: 5}
    ]
})


Example of Reference:

db.orders.insertOne({userId: ObjectId("..."), item: "Book"})

6. Replication

Replica Set: Set of MongoDB servers for redundancy.

Types:

Primary: Accepts writes

Secondary: Copies data from primary

Arbiter: Votes in elections, no data

7. Sharding

Horizontal scaling using shards.

Components:

Shard: Stores subset of data

Config server: Stores metadata

Query router (mongos): Routes queries to shards

8. Useful Shell Commands
Command	Explanation
db.stats()	Show database statistics.
db.collection.stats()	Show collection stats.
db.currentOp()	Show current operations.
db.killOp(opid)	Kill a running operation.

MongoDB Interview Cheatsheet
Databases
| Command             | Purpose            | Example             |
| ------------------- | ------------------ | ------------------- |
| `show dbs`          | List all databases | `show dbs`          |
| `use <db>`          | Switch/create DB   | `use myDB`          |
| `db`                | Current database   | `db`                |
| `db.dropDatabase()` | Delete current DB  | `db.dropDatabase()` |

Collections
| Command                       | Purpose           | Example                        |
| ----------------------------- | ----------------- | ------------------------------ |
| `show collections`            | List collections  | `show collections`             |
| `db.createCollection('name')` | Create collection | `db.createCollection('users')` |
| `db.collection.drop()`        | Delete collection | `db.users.drop()`              |

Create
| Command        | Example                                              |
| -------------- | ---------------------------------------------------- |
| `insertOne()`  | `db.users.insertOne({name:"John", age:25})`          |
| `insertMany()` | `db.users.insertMany([{name:"Alice"},{name:"Bob"}])` |

Read
| Command           | Example                    |
| ----------------- | -------------------------- |
| `find()`          | `db.users.find()`          |
| `find(filter)`    | `db.users.find({age:25})`  |
| `find().pretty()` | `db.users.find().pretty()` |

Update
| Command                      | Example                                              |
| ---------------------------- | ---------------------------------------------------- |
| `updateOne(filter, update)`  | `db.users.updateOne({name:"John"}, {$set:{age:26}})` |
| `updateMany(filter, update)` | `db.users.updateMany({city:"NY"}, {$inc:{age:1}})`   |

Delete
| Command              | Example                               |
| -------------------- | ------------------------------------- |
| `deleteOne(filter)`  | `db.users.deleteOne({name:"Alice"})`  |
| `deleteMany(filter)` | `db.users.deleteMany({age:{$lt:30}})` |

Query Operators
| Operator          | Use               | Example                        |
| ----------------- | ----------------- | ------------------------------ |
| `$eq`             | Equal             | `{age: {$eq:25}}`              |
| `$ne`             | Not equal         | `{age: {$ne:25}}`              |
| `$gt, $gte`       | Greater than / >= | `{age: {$gt:25}}`              |
| `$lt, $lte`       | Less than / <=    | `{age: {$lte:30}}`             |
| `$in, $nin`       | In / Not in array | `{city: {$in:["NY","LA"]}}`    |
| `$and, $or, $not` | Logical           | `{$or:[{age:25},{city:"NY"}]}` |
| `$exists`         | Field exists      | `{phone: {$exists:true}}`      |
| `$regex`          | Pattern match     | `{name: {$regex:/^J/}}`        |

Indexing

| Command                   | Example                                      |
| ------------------------- | -------------------------------------------- |
| `createIndex({field:1})`  | Ascending: `db.users.createIndex({age:1})`   |
| `createIndex({field:-1})` | Descending: `db.users.createIndex({age:-1})` |
| `getIndexes()`            | List indexes: `db.users.getIndexes()`        |
| `dropIndex({field:1})`    | Drop index: `db.users.dropIndex({age:1})`    |

Aggregation (Pipeline)
| Stage      | Use               | Example                                                |
| ---------- | ----------------- | ------------------------------------------------------ |
| `$match`   | Filter            | `{$match:{status:"shipped"}}`                          |
| `$group`   | Group & aggregate | `{$group:{_id:"$customerId", total:{$sum:"$amount"}}}` |
| `$sort`    | Sort results      | `{$sort:{total:-1}}`                                   |
| `$project` | Select fields     | `{$project:{name:1,total:1}}`                          |
| `$limit`   | Limit docs        | `{$limit:5}`                                           |
| `$skip`    | Skip docs         | `{$skip:10}`                                           |

Example Full Pipeline:

db.orders.aggregate([
  {$match: {status:"shipped"}},
  {$group: {_id:"$customerId", total:{$sum:"$amount"}}},
  {$sort:{total:-1}},
  {$limit:5}
])

7. Data Modeling

Embedded Document: Related data inside one document.

db.users.insertOne({
  name:"John",
  orders:[{item:"Book", qty:2},{item:"Pen", qty:5}]
})


Reference: Use ObjectId to link documents.

db.orders.insertOne({userId:ObjectId("..."), item:"Book"})

8. Replication & Sharding

Replication: Replica set for high availability.

Primary: Writes

Secondary: Copies primary

Arbiter: Votes in election

Sharding: Horizontal scaling.

Shard: Data subset

Config server: Metadata

mongos: Query router

Useful Commands
| Command                 | Use                      |
| ----------------------- | ------------------------ |
| `db.stats()`            | Database stats           |
| `db.collection.stats()` | Collection stats         |
| `db.currentOp()`        | Current operations       |
| `db.killOp(opid)`       | Kill a running operation |



