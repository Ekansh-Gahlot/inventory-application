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
        const {rows} = await await pool.query('Select * from games;');
        res.render('updateGameForm',{games:rows})
    } catch (error) {
        
    }
}

async function updateGame(req,res) {
    const {games} = req.body;
    try {
        const queries = games.map(game=>{
            return pool.query( 'UPDATE games SET title = $1, release_date = $2, developer_id = $3, genre_id = $4 WHERE id = $5', [game.title,game.release_date, game.developer_id,game.genre_id,game.id]
            );
        });
       
        await Promise.all(queries);
        console.log(queries);
        res.status(200).redirect('/');
        // res.redirect('/');
    } catch (error) {
        console.error('Error Updating games',error);
        res.status(500).send('Error updating games')
    }
   
}


async function developerPages(req,res){
    try {
        const {row} = await pool.query('Select * from developers');
        console.log(row)
        res.render('developersPages',{dev:row});
    } catch (error) {
        
    }
}

module.exports = {
    displayHomePage,
    displayGamePage,
    displayUpdateGame,
    developerPages,
    updateGame
}