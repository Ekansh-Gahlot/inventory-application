const pool = require('../db_config/pool')

function displayHomePage(req,res){
    res.render('homepage');
}

async function displayGamePage(req,res){
    try {
        const {rows} = await pool.query('Select * from games;');
        // console.log(rows);
        res.render('gamesPage',{games: rows});
    } catch (error) {
        res.status(500).send('Some error occured in retrieving data')
    }
}

async function displayUpdateGame(req,res){
    try {
        const {rows} = await pool.query('Select * from games;');
        res.render('updateGameForm',{games:rows})
    } catch (error) {
        
    }
}


async function updateGame(req,res) {
    const {games} = req.body;
    console.log(req.body)
    try {
        const queries = games.map(game=>{
            return pool.query( 'UPDATE games SET title = $1, release_date = $2, developer_id = $3, genre_id = $4 WHERE id = $5', [game.title,game.release_date, game.developer_id,game.genre_id,game.id]
            );
        });
        await Promise.all(queries);
        console.log(queries);
        res.status(200).redirect('/');
    } catch (error) {
        console.error('Error Updating games',error);
        res.status(500).send('Error updating games')
    }
   
}

async function displayUpdateDevelopers(req,res){
    try {
        const {rows} = await pool.query('Select * from developers;');
        res.render('updateDevelopersForm',{developers:rows})
    } catch (error) {
        
    }
}


async function updateDevelopers(req,res){
    // console.log(req.body)
    const {developers} = req.body;
    console.log(developers)
    try{
        const queries = developers.map(dev=>{
            return pool.query('UPDATE developers SET name = $1, website = $2 WHERE id = $3', [dev.name, dev.website, dev.id]);
        })
        await Promise.all(queries)
        // console.log(queries);
        res.status(200).redirect('/');
    }catch(error){
        console.log('Error updating developers', error);
        res.status(500).send('Error updating developers');
    }
}

async function displayDeveloperPages(req,res){
    try {
        const {rows} = await pool.query('Select * from developers;');
        res.render('developersPages',{devs:rows});
    } catch (error) {
        
    }
}

async function displayGenres(req,res) {
    try {
        const {rows} = await pool.query('Select * from genres;')
        res.render('genresPages', {genres:rows})
    } catch (error) {
        
    }
}


async function displayUpdateGenres(req,res){
    try {
        const {rows} = await pool.query('Select * from genres;')
        // console.log(rows);
        res.render('updateGenreForm', {genres:rows})
    } catch (error) {
        
    }
}

async function updateGenres(req,res){
    try{
        console.log('Hello display update genres')
        const {genres} = req.body;
        const queries = genres.map(genre=>{
            return pool.query('UPDATE genres SET name = $1, description = $2 WHERE id = $3', [genre.name, genre.description, genre.id]);
        })
        await Promise.all(queries)
        // console.log(queries);
        res.status(200).redirect('/');
    }catch(error){
        console.log('Error updating genres', error);
        res.status(500).send('Error updating genres');
    }
}

module.exports = {
    displayHomePage,
    displayGamePage,
    displayUpdateGame,
    displayDeveloperPages,
    updateGame,
    updateDevelopers,
    displayUpdateDevelopers,
    displayGenres,
    displayUpdateGenres,
    updateGenres
}