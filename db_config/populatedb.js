const { Client } = require("pg");

const SQL_genre = `
-- Inserting data into the genres table
INSERT INTO genres (name, description) VALUES
  ('Action', 'Games that involve physical challenges and combat'),
  ('Adventure', 'Games that focus on exploration and puzzle-solving'),
  ('RPG', 'Role-playing games where players control a character in a narrative'),
  ('Strategy', 'Games that require careful planning and tactics'),
  ('Simulation', 'Games that simulate real-world activities or systems');
`;

const SQL_developers = `
INSERT INTO developers (name, website) VALUES
  ('Nintendo', 'https://www.nintendo.com'),
  ('Sony Interactive Entertainment', 'https://www.playstation.com'),
  ('Electronic Arts', 'https://www.ea.com'),
  ('Rockstar Games', 'https://www.rockstargames.com'),
  ('Square Enix', 'https://www.square-enix.com')
`;

const SQL_games = `
INSERT INTO games (title, release_date, developer_id, genre_id) VALUES
  ('The Legend of Zelda: Breath of the Wild', '2017-03-03', 1, 2),   
  ('God of War', '2018-04-20', 2, 1),                              
  ('FIFA 21', '2020-10-09', 3, 1),                                 
  ('Grand Theft Auto V', '2013-09-17', 4, 1),              
  ('Final Fantasy VII', '1997-01-17', 5, 3);                    
`;



async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://mosaic:1235@localhost:5432/app",
  });
  await client.connect();
  await client.query(SQL_genre);
  await client.query(SQL_developers);
  await client.query(SQL_games);
  await client.end();
  console.log("done");
}

main();