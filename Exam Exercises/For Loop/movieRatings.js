function movieRatings(input) {
    let numbers = Number(input.shift())
    let movies = []
    let ratings = []
    let sum = 0
  
    for (let i = 0; i < numbers; i++) {
      let movieName = String(input.shift())
      let movieRating = Number(input.shift())
      sum += movieRating
  
      movies[i] = movieName
      ratings[i] = movieRating
    }
    let maxRating = ratings.indexOf(Math.max(...ratings))
    let minRating = ratings.indexOf(Math.min(...ratings))
  
    console.log(`${movies[maxRating]} is with highest rating: ${ratings[maxRating].toFixed(1)}`)
    console.log(`${movies[minRating]} is with lowest rating: ${ratings[minRating].toFixed(1)}`)
    console.log(`Average rating: ${(sum / ratings.length).toFixed(1)}`)
} 

movieRatings(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])
