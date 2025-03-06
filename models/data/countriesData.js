import 'dotenv/config.js'
import "../../config/database.js"
import Countrie from '../Countrie.js'

let countries = [
    { name: "USA", continent: "North America", population: 331000000 },
    { name: "Canada", continent: "North America", population: 38000000 },
    { name: "Brazil", continent: "South America", population: 213000000 },
    { name: "Germany", continent: "Europe", population: 83000000 },
    { name: "France", continent: "Europe", population: 67000000 },
    { name: "Japan", continent: "Asia", population: 126000000 },
    { name: "Australia", continent: "Oceania", population: 25000000 },
    { name: "India", continent: "Asia", population: 1390000000 },
    { name: "Russia", continent: "Europe/Asia", population: 144000000 },
    { name: "China", continent: "Asia", population: 1400000000 },
    { name: "Mexico", continent: "North America", population: 126000000 },
    { name: "South Africa", continent: "Africa", population: 59000000 },
    { name: "Argentina", continent: "South America", population: 45000000 },
    { name: "Italy", continent: "Europe", population: 60000000 },
    { name: "Spain", continent: "Europe", population: 47000000 }
  ];
 
  Countrie.insertMany(countries)