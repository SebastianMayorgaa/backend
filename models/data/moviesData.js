import 'dotenv/config.js'
import "../../config/database.js"
import Movie from '../Movie.js'

let movies = [
    { title: "Inception", genre: "Sci-Fi", director: "Christopher Nolan", year: 2010, rating: 8.8 },
    { title: "The Dark Knight", genre: "Action", director: "Christopher Nolan", year: 2008, rating: 9.0 },
    { title: "Forrest Gump", genre: "Drama", director: "Robert Zemeckis", year: 1994, rating: 8.8 },
    { title: "Interstellar", genre: "Sci-Fi", director: "Christopher Nolan", year: 2014, rating: 8.6 },
    { title: "The Matrix", genre: "Sci-Fi", director: "The Wachowskis", year: 1999, rating: 8.7 },
    { title: "Titanic", genre: "Romance", director: "James Cameron", year: 1997, rating: 7.9 },
    { title: "Avatar", genre: "Sci-Fi", director: "James Cameron", year: 2009, rating: 7.8 },
    { title: "Pulp Fiction", genre: "Crime", director: "Quentin Tarantino", year: 1994, rating: 8.9 },
    { title: "The Lion King", genre: "Animation", director: "Roger Allers", year: 1994, rating: 8.5 },
    { title: "Shrek", genre: "Animation", director: "Andrew Adamson", year: 2001, rating: 7.9 },
    { title: "Joker", genre: "Drama", director: "Todd Phillips", year: 2019, rating: 8.4 },
    { title: "Gladiator", genre: "Action", director: "Ridley Scott", year: 2000, rating: 8.5 },
    { title: "The Shawshank Redemption", genre: "Drama", director: "Frank Darabont", year: 1994, rating: 9.3 },
    { title: "Fight Club", genre: "Drama", director: "David Fincher", year: 1999, rating: 8.8 },
    { title: "The Godfather", genre: "Crime", director: "Francis Ford Coppola", year: 1972, rating: 9.2 }
  ];
  
  Movie.insertMany(movies)