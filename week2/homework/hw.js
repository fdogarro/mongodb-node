db.movieDetails.find({ $and : [ { "year": { $eq: 2013 } },
                                { "rated": { $eq: "PG-13" } }, 
                                { "awards.wins": { $eq: 0 } } 
                              ] })

db.movieDetails.find({ "countries.1": "Sweden"}).count()

db.movieDetails.find({ "genres.0": "Comedy", "genres.1": "Crime"}).count()

// match array item at specific index

db.movieDetails.find({ genres: ["Comedy", "Crime"] } ).count()

