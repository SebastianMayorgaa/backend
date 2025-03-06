import 'dotenv/config.js'
import "../../config/database.js"
import Planet from '../Planet.js'

let planets = [
    { name: "Mercury", type: "Rocky", distanceFromSun: "57.9M km", diameter: "4,879 km", gravity: "3.7 m/s²", moons: 0, atmosphere: "Thin" },
    { name: "Venus", type: "Rocky", distanceFromSun: "108.2M km", diameter: "12,104 km", gravity: "8.9 m/s²", moons: 0, atmosphere: "Thick" },
    { name: "Earth", type: "Rocky", distanceFromSun: "149.6M km", diameter: "12,742 km", gravity: "9.8 m/s²", moons: 1, atmosphere: "Nitrogen-Oxygen" },
    { name: "Mars", type: "Rocky", distanceFromSun: "227.9M km", diameter: "6,779 km", gravity: "3.7 m/s²", moons: 2, atmosphere: "Thin CO₂" },
    { name: "Jupiter", type: "Gas Giant", distanceFromSun: "778.5M km", diameter: "139,820 km", gravity: "24.8 m/s²", moons: 79, atmosphere: "Hydrogen-Helium" },
    { name: "Saturn", type: "Gas Giant", distanceFromSun: "1.4B km", diameter: "116,460 km", gravity: "10.4 m/s²", moons: 83, atmosphere: "Hydrogen-Helium" },
    { name: "Uranus", type: "Ice Giant", distanceFromSun: "2.9B km", diameter: "50,724 km", gravity: "8.7 m/s²", moons: 27, atmosphere: "Methane-Hydrogen" },
    { name: "Neptune", type: "Ice Giant", distanceFromSun: "4.5B km", diameter: "49,244 km", gravity: "11.2 m/s²", moons: 14, atmosphere: "Methane-Hydrogen" },
    { name: "Pluto", type: "Dwarf", distanceFromSun: "5.9B km", diameter: "2,377 km", gravity: "0.6 m/s²", moons: 5, atmosphere: "Thin Nitrogen" },
    { name: "Kepler-22b", type: "Exoplanet", distanceFromSun: "600 LY", diameter: "Unknown", gravity: "Unknown", moons: 0, atmosphere: "Possible Water Vapor" },
    { name: "Proxima b", type: "Exoplanet", distanceFromSun: "4.2 LY", diameter: "Unknown", gravity: "Unknown", moons: 0, atmosphere: "Unconfirmed" },
    { name: "Titan", type: "Moon", distanceFromSun: "1.4B km", diameter: "5,151 km", gravity: "1.35 m/s²", moons: 0, atmosphere: "Thick Nitrogen" },
    { name: "Europa", type: "Moon", distanceFromSun: "778.5M km", diameter: "3,121 km", gravity: "1.3 m/s²", moons: 0, atmosphere: "Thin Oxygen" },
    { name: "Ganymede", type: "Moon", distanceFromSun: "778.5M km", diameter: "5,268 km", gravity: "1.43 m/s²", moons: 0, atmosphere: "Thin Oxygen" },
    { name: "Enceladus", type: "Moon", distanceFromSun: "1.4B km", diameter: "504 km", gravity: "0.1 m/s²", moons: 0, atmosphere: "Water Vapor" }
  ];
  
  Planet.insertMany(planets)