var express = require("express");
var Sequelize = require("sequelize");
var nodeadmin = require("nodeadmin");

//connect to mysql database
var sequelize = new Sequelize('database', 'root', '', {
  dialect:'mysql',
  host:'localhost'
})

sequelize.authenticate().then(function(){
    console.log('Success')
})

//define a new Model
var Genres = sequelize.define('genres', {
  name: Sequelize.STRING,
  description: Sequelize.STRING
})

var Artists = sequelize.define('artists', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  image = Sequelize.STRING
})

var Songs = sequelize.define('songs', {
  genreId: Sequelize.INTEGER,
  artistId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  fileName: Sequelize.STRING,
  playtime: Sequelize.INTEGER
})


var Users = sequelize.define('users',{
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email:Sequelize.STRING,
  image:Sequelize.STRING
})

var Playlist = sequelize.define('playlist', {
  userId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  description: Sequelize.STRING
})

var Playlist_Songs = sequelize.define('playlist_songs', {
  playlistId: Sequelize.INTEGER,
  songId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  description: Sequelize.STRING
})

Songs.belongTo(Genres, {foreignKey: "genreId", targetKey: "id"})
Songs.belongTo(Artists, {foreignKey: "songId", targetKey: "id"})
Playlist.belongTo(Users, {foreignKey: "userId", targetKey: "id"})    
Playlist_Songs.belongTo(Playlist, {foreignKey: "playlistId", targetKey: "id"})
Playlist_Songs.belongTo(Songs, {foreignKey: "songId", targetKey: "id"})

                          
var app = express()
app.use(express.static('public'))
app.use('/public', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))


