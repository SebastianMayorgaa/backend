import 'dotenv/config.js'
import "../../config/database.js"
import User from "../User.js";

let users = [
        {
          name: "Carlos Mendoza",
          email: "carlos.mendoza@example.com",
          password: "P@ssword123",
          photo: "https://randomuser.me/api/portraits/men/1.jpg",
          role: 1
        },
        {
          name: "Ana Rodríguez",
          email: "ana.rodriguez@example.com",
          password: "AnaPass2024",
          photo: "https://randomuser.me/api/portraits/women/1.jpg",
          role: 2
        },
        {
          name: "Luis Pérez",
          email: "luis.perez@example.com",
          password: "LuisSecure99",
          photo: "https://randomuser.me/api/portraits/men/2.jpg",
          role: 3
        },
        {
          name: "María Fernández",
          email: "maria.fernandez@example.com",
          password: "M4riaF3rn",
          photo: "https://randomuser.me/api/portraits/women/2.jpg",
          role: 1
        },
        {
          name: "Javier Gómez",
          email: "javier.gomez@example.com",
          password: "JavierPass2024",
          photo: "https://randomuser.me/api/portraits/men/3.jpg",
          role: 2
        },
        {
          name: "Lucía Herrera",
          email: "lucia.herrera@example.com",
          password: "LuciaH!Pass",
          photo: "https://randomuser.me/api/portraits/women/3.jpg",
          role: 3
        },
        {
          name: "Diego Castro",
          email: "diego.castro@example.com",
          password: "D13goC@stro",
          photo: "https://randomuser.me/api/portraits/men/4.jpg",
          role: 1
        },
        {
          name: "Paula Ruiz",
          email: "paula.ruiz@example.com",
          password: "P@ulaR123",
          photo: "https://randomuser.me/api/portraits/women/4.jpg",
          role: 2
        },
        {
          name: "Fernando López",
          email: "fernando.lopez@example.com",
          password: "FerLpz2024",
          photo: "https://randomuser.me/api/portraits/men/5.jpg",
          role: 3
        },
        {
          name: "Sofía Martínez",
          email: "sofia.martinez@example.com",
          password: "SofiaM@rt",
          photo: "https://randomuser.me/api/portraits/women/5.jpg",
          role: 1
        },
        {
          name: "Andrés Ramírez",
          email: "andres.ramirez@example.com",
          password: "AndresR2024",
          photo: "https://randomuser.me/api/portraits/men/6.jpg",
          role: 2
        },
        {
          name: "Elena Vargas",
          email: "elena.vargas@example.com",
          password: "ElenaV!Pass",
          photo: "https://randomuser.me/api/portraits/women/6.jpg",
          role: 3
        },
        {
          name: "Ricardo Torres",
          email: "ricardo.torres@example.com",
          password: "RicardoT123",
          photo: "https://randomuser.me/api/portraits/men/7.jpg",
          role: 1
        },
        {
          name: "Valeria Jiménez",
          email: "valeria.jimenez@example.com",
          password: "ValeriaJ2024",
          photo: "https://randomuser.me/api/portraits/women/7.jpg",
          role: 2
        },
        {
          name: "Manuel Ortega",
          email: "manuel.ortega@example.com",
          password: "ManuelO@Pass",
          photo: "https://randomuser.me/api/portraits/men/8.jpg",
          role: 3
        },
        {
          name: "Gabriela Castillo",
          email: "gabriela.castillo@example.com",
          password: "GabrielaC!2024",
          photo: "https://randomuser.me/api/portraits/women/8.jpg",
          role: 1
        },
        {
          name: "Raúl Ríos",
          email: "raul.rios@example.com",
          password: "RaulR!Pass",
          photo: "https://randomuser.me/api/portraits/men/9.jpg",
          role: 2
        },
        {
          name: "Daniela Navarro",
          email: "daniela.navarro@example.com",
          password: "DanielaN2024",
          photo: "https://randomuser.me/api/portraits/women/9.jpg",
          role: 3
        },
        {
          name: "José Vargas",
          email: "jose.vargas@example.com",
          password: "JoseV!Pass",
          photo: "https://randomuser.me/api/portraits/men/10.jpg",
          role: 1
        },
        {
          name: "Mónica Salazar",
          email: "monica.salazar@example.com",
          password: "MonicaS2024",
          photo: "https://randomuser.me/api/portraits/women/10.jpg",
          role: 2
        },
        {
          name: "Francisco León",
          email: "francisco.leon@example.com",
          password: "FranciscoL!Pass",
          photo: "https://randomuser.me/api/portraits/men/11.jpg",
          role: 3
        },
        {
          name: "Clara Mendoza",
          email: "clara.mendoza@example.com",
          password: "ClaraM2024",
          photo: "https://randomuser.me/api/portraits/women/11.jpg",
          role: 1
        },
        {
          name: "Pedro Solís",
          email: "pedro.solis@example.com",
          password: "PedroS!Pass",
          photo: "https://randomuser.me/api/portraits/men/12.jpg",
          role: 2
        },
        {
          name: "Natalia Rojas",
          email: "natalia.rojas@example.com",
          password: "NataliaR2024",
          photo: "https://randomuser.me/api/portraits/women/12.jpg",
          role: 3
        },
        {
          name: "Oscar Pérez",
          email: "oscar.perez@example.com",
          password: "OscarP!Pass",
          photo: "https://randomuser.me/api/portraits/men/13.jpg",
          role: 1
        },
        {
          name: "Laura Gutiérrez",
          email: "laura.gutierrez@example.com",
          password: "LauraG2024",
          photo: "https://randomuser.me/api/portraits/women/13.jpg",
          role: 2
        },
        {
          name: "Miguel Espinoza",
          email: "miguel.espinoza@example.com",
          password: "MiguelE@2024",
          photo: "https://randomuser.me/api/portraits/men/14.jpg",
          role: 3
        },
        {
          name: "Patricia Silva",
          email: "patricia.silva@example.com",
          password: "PatriciaS!Pass",
          photo: "https://randomuser.me/api/portraits/women/14.jpg",
          role: 1
        },
        {
          name: "Roberto Núñez",
          email: "roberto.nunez@example.com",
          password: "RobertoN2024",
          photo: "https://randomuser.me/api/portraits/men/15.jpg",
          role: 2
        },
        {
          name: "Isabel Ortega",
          email: "isabel.ortega@example.com",
          password: "IsabelO!Pass",
          photo: "https://randomuser.me/api/portraits/women/15.jpg",
          role: 3
        }
]

User.insertMany(users)