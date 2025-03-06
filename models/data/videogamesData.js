import 'dotenv/config.js'
import "../../config/database.js"
import Videogame from '../Videogame.js'

let videoGames = [
    { title: "The Legend of Zelda", genre: "Adventure", developer: "Nintendo", year: 1986, platform: "NES", rating: 9.0 },
    { title: "Super Mario Bros", genre: "Platform", developer: "Nintendo", year: 1985, platform: "NES", rating: 9.3 },
    { title: "Minecraft", genre: "Sandbox", developer: "Mojang", year: 2011, platform: "Multi", rating: 9.5 },
    { title: "The Witcher 3", genre: "RPG", developer: "CD Projekt Red", year: 2015, platform: "Multi", rating: 9.7 },
    { title: "Dark Souls", genre: "Action RPG", developer: "FromSoftware", year: 2011, platform: "Multi", rating: 9.0 },
    { title: "Red Dead Redemption 2", genre: "Action", developer: "Rockstar", year: 2018, platform: "Multi", rating: 9.8 },
    { title: "Halo: Combat Evolved", genre: "Shooter", developer: "Bungie", year: 2001, platform: "Xbox", rating: 9.4 },
    { title: "GTA V", genre: "Action", developer: "Rockstar", year: 2013, platform: "Multi", rating: 9.6 },
    { title: "Final Fantasy VII", genre: "RPG", developer: "Square Enix", year: 1997, platform: "PS1", rating: 9.5 },
    { title: "Elden Ring", genre: "RPG", developer: "FromSoftware", year: 2022, platform: "Multi", rating: 9.9 },
    { title: "God of War", genre: "Action", developer: "Santa Monica Studio", year: 2018, platform: "PS4", rating: 9.7 },
    { title: "The Last of Us", genre: "Action", developer: "Naughty Dog", year: 2013, platform: "PS3", rating: 9.8 },
    { title: "Resident Evil 4", genre: "Horror", developer: "Capcom", year: 2005, platform: "Multi", rating: 9.5 },
    { title: "Cyberpunk 2077", genre: "RPG", developer: "CD Projekt Red", year: 2020, platform: "Multi", rating: 8.0 },
    { title: "Metroid Prime", genre: "Adventure", developer: "Retro Studios", year: 2002, platform: "GameCube", rating: 9.6 }
  ];
  
  
  Videogame.insertMany(videoGames)