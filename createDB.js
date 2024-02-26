const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./server/comments.db");

// Create a table for job posts with estimatedCost as REAL
db.serialize(() => {
  db.run(`
  DROP TABLE IF EXISTS users
  `);
  // Create a table for job posts
  db.run(
    `CREATE TABLE IF NOT EXISTS job_posts (
      customerName TEXT, 
      phone TEXT, 
      email TEXT, 
      freightType TEXT, 
      freightWeight TEXT, 
      destination TEXT, 
      cargoLocation TEXT, 
      jobDescription TEXT, 
      specialCase TEXT, 
      estimatedCost REAL
    )
    `);

  // Create a table for regular users
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      phone INTEGER
    )
  `);

  // Create the 'drivers' table if it doesn't exist
  db.run(`CREATE TABLE IF NOT EXISTS drivers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    bio TEXT,
    price INTEGER,
    rating INTEGER,
    freightType TEXT,
    phone INTEGER
  )`);
});

// Example data for users
const initialUsers = [
  ["mickey@disney.com", "cheese@123", "Mickey", "Mouse", 344443],
  ["alfred@deakin.com", "#pm1903aus", "Alfred", "Deakin", 4325],
  ["jane@example.com", "@qwerty1P", "Jane", "Smith", 12353],
  ["john@cleese.com", "Brian@1979", "John", "Cleese", 27518],
  ["terry@example.com", "Rick&Morty1969", "Terry", "Jones", 3497],
];

// Populate users table with initialUsers data
for (const userData of initialUsers) {
  db.run(
    "INSERT INTO users (email, password, firstName, lastName, phone) VALUES (?, ?, ?, ?, ?)",
    userData[0],
    userData[1],
    userData[2],
    userData[3],
    userData[4]
  );
}

// Sample data for drivers
const initialDrivers = [
  [
    "John",
    "Doe",
    "Meet John, our Roadmaster! With over 15 years of experience behind the wheel.",
    300,
    5,
    "Flatbed Truck",
    "04001379001",
  ],
  [
    "James",
    "Baldwin",
    "Meet James, a seasoned driver with exceptional skills.",
    180,
    4,
    "Refrigerated truck",
    "06234300002",
  ],
  [
    "Maria",
    "Monroe",
    "Queen on the road. Known for optimizing routes and streamlining deliveries.",
    420,
    4.5,
    "Tanker",
    "034600370012",
  ],
  [
    "David",
    "Boew",
    "Cargo Maestro, specializes in transporting unique cargo types, fragile to oversized loads.",
    670,
    4,
    "Dump truck",
    "0612008034",
  ],
  [
    "Michael",
    "Smith",
    "Safety is Michael's top priority. You can trust that your goods are in safe hands.",
    1990,
    4.7,
    "Wheeler truck",
    "07791739823",
  ],
  [
    "Naomi",
    "Small",
    "Beyond being a skilled driver, Naomi is our Smiling Hauler. Building positive relationships on the road.",
    3234,
    4.2,
    "Refrigerated truck",
    "08778127994",
  ],
];

// Insert the initial drivers into the 'drivers' table
const insertDrivers = db.prepare(
  "INSERT INTO drivers (firstName, lastName, bio, price, rating,freightType,phone) VALUES (?, ?, ?, ?, ?,?,?)"
);

initialDrivers.forEach((driver) => {
  insertDrivers.run(driver);
});

insertDrivers.finalize();

db.close();
console.log("Database created and initialized.");
