import 'dotenv/config.js'
import "../../config/database.js"
import Fruit from '../Fruit.js'

let fruits = [
    { name: "Apple", color: "Red", taste: "Sweet", season: "Fall" },
    { name: "Banana", color: "Yellow", taste: "Sweet", season: "Year-round" },
    { name: "Orange", color: "Orange", taste: "Citrus", season: "Winter" },
    { name: "Strawberry", color: "Red", taste: "Sweet", season: "Spring" },
    { name: "Grapes", color: "Purple", taste: "Sweet", season: "Fall" },
    { name: "Watermelon", color: "Green", taste: "Refreshing", season: "Summer" },
    { name: "Pineapple", color: "Brown", taste: "Tropical", season: "Year-round" },
    { name: "Mango", color: "Yellow", taste: "Sweet", season: "Summer" },
    { name: "Blueberry", color: "Blue", taste: "Tart", season: "Summer" },
    { name: "Peach", color: "Pink", taste: "Sweet", season: "Summer" },
    { name: "Pear", color: "Green", taste: "Mildly Sweet", season: "Fall" },
    { name: "Cherry", color: "Red", taste: "Sweet", season: "Summer" },
    { name: "Pomegranate", color: "Red", taste: "Tangy", season: "Fall" },
    { name: "Kiwi", color: "Brown", taste: "Tart", season: "Winter" },
    { name: "Lemon", color: "Yellow", taste: "Sour", season: "Year-round" }
  ];
  
  Fruit.insertMany(fruits)