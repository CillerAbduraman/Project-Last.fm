var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
var Sequelize = require("sequelize");
var bodyParser = require('body-parser');
var axios = require('axios');
var apiKey = "328da2b579939b02fb2bc271ac24502d";



//connect to mysql database
var sequelize = new Sequelize('music_management', 'root', '', {
    dialect:'mysql',
    host:process.env.IP,
    freezeTableName: true,
    operatorAliases: false
})


sequelize.authenticate().then(function(){
    console.log('Success')
})

var playlist = sequelize.define('playlist', {
    idPlaylist: Sequelize.INTEGER,
    titlu: Sequelize.STRING,
    artist: Sequelize.STRING,
    poza: Sequelize.STRING,
    url: Sequelize.STRING
    
},{
   freezeTableName: true,
   tableName: 'playlist'
    
})

var artists = sequelize.define('artist', {
    idArtist: Sequelize.INTEGER,
    nume: Sequelize.STRING,
    ascultatori: Sequelize.INTEGER,
    url: Sequelize.STRING,
    poza: Sequelize.STRING
})


router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function (request,response){
   response.render('index',  {});
});

router.get('/topArtist',function (request, response){
        this.serverRequest = 
          axios
            .get("http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key="+apiKey+"&format=json")
            .then(function(result)
            {
                response.render('topArtists', {data: result.data.artists.artist});
            })
});

router.get('/topTracks',function (request, response){
        this.serverRequest = 
          axios
            .get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key="+apiKey+"&format=json")
            .then(function(result)
            {
                response.render('topTracks', {data: result.data.tracks.track});
            })
});

router.get('/myPlaylist',function(request, response){
     playlist.findAll({
          attributes: { exclude: ['id',`createdAt`, `updatedAt`] }
     }).then(function(playlist){
        response.render('myPlaylist', {data: playlist});
    })
})

router.get('/myArtists',function(request, response){
     artists.findAll({
          attributes: { exclude: ['id',`createdAt`, `updatedAt`] }
     }).then(function(playlist){
        response.render('myArtists', {data: playlist});
    })
})

router.post('/addPlaylist',function(request, response){
    var titlu = request.body.titlu;
    var artist = request.body.artist;
    var poza = request.body.poza;
    var url = request.body.url;
    
    var sql ="INSERT INTO playlist ( titlu , artist , poza , url) VALUES ('"+titlu+"','"+artist+"','"+poza+"','"+url+"')";
        sequelize.query(sql).spread((results, metadata) => {})
    
        response.render('confirm', {title: "Salvare inregistrata"});
     
})

router.post('/addArtist',function(request, response){
    var nume = request.body.nume;
    var ascultatori = request.body.ascultatori;
    var poza = request.body.poza;
    var url = request.body.url;
    
    var sql ="INSERT INTO artists ( nume , ascultatori , poza , url) VALUES ('"+nume+"','"+ascultatori+"','"+poza+"','"+url+"')";
        sequelize.query(sql).spread((results, metadata) => {})
    
        response.render('confirm', {title: "Salvare inregistrata"});
     
})

router.post('/searchSongs',function(request, response){
    var title = request.body.title;
    
     this.serverRequest = 
          axios
            .get("http://ws.audioscrobbler.com/2.0/?method=track.search&track="+title+"&api_key="+apiKey+"&format=json")
            .then(function(result)
            {
                response.render('searchResult', {data: result.data.results.trackmatches.track});
            })
     
})

router.post('/delete',function(request, response){
    var idPlaylist = request.body.idPlaylist;
    
    var sql ="DELETE FROM playlist WHERE idPlaylist = '"+idPlaylist+"'";
        sequelize.query(sql).spread((results, metadata) => {})
    
        response.render('confirm', {title: "Salvare inregistrata"});
     
})
router.post('/deleteArtist',function(request, response){
    var idArtist = request.body.idArtist;
    
    var sql ="DELETE FROM artists WHERE idArtist = '"+idArtist+"'";
        sequelize.query(sql).spread((results, metadata) => {})
    
        response.render('confirm', {title: "Salvare inregistrata"});
     
})

module.exports = router;
