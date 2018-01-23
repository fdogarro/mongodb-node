db.movieDetails.find({ runtime: { $gt: 90 } }).count()
//greater than 

db.movieDetails.find({ runtime: { $gt: 90, $lt: 120 } }).count()

// greater than 90 and less than 120

// also $gte - greater than equal to and $lte greater than equal to

db.movieDetails.find({ "tomato.meter": { $gte: 95 }, runtime: { $gt: 180 } })

// can work with any number of fields 

db.movieDetails.find({ rated: { $ne: "UNRATED" } }).count()

//Not equal to 

db.movieDetails.find({ rated: { $in: ["G", "PG"] } }).pretty()

// Matches any value in the array



