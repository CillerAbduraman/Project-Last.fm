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

//define a new model
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

var Playlists = sequelize.define('playlists', {
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

//****************************************************************************************
Songs.belongTo(Genres, {foreignKey: "genreId", targetKey: "id"})
Songs.belongTo(Artists, {foreignKey: "artistId", targetKey: "id"})
Playlists.belongTo(Users, {foreignKey: "userId", targetKey: "id"})    
Playlist_Songs.belongTo(Playlists, {foreignKey: "playlistId", targetKey: "id"})
Playlist_Songs.belongTo(Songs, {foreignKey: "songId", targetKey: "id"})

//****************************************************************************************

app.use('/nodeadmin', nodeadmin(app))
app.use(express.static('public'))
app.use('/admin', express.static('admin'))
app.use(express.json());      
app.use(express.urlencoded()); 

// ****************************************************************************************
//GET A LIST OF GENRES
app.get('/genres', function(request, response) {
    Genres.findAll().then(function(genres){
        response.status(200).send(genres)
    })
})

// GET ONE GENRE BY ID
app.get('/genres/:id', function(request, response) {
    Genres.findOne({where: {id:request.params.id}}).then(function(genre) {
        if(genre) {
            response.status(200).send(genre)
        } else {
            response.status(404).send()
        }
    })
})


//CREATE A NEW GENRE
app.post('/genres', function(request, response) {
    Genres.create(request.body).then(function(genre) {
        response.status(201).send(genre)
    })
})


//UPDATE
app.put('/genres/:id', function(request, response) {
    Genres.findById(request.params.id).then(function(genre) {
        if(genre) {
            genre.update(request.body).then(function(genre){
                response.status(201).send(genre)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//DELETE
app.delete('/genres/:id', function(request, response) {
    Genres.findById(request.params.id).then(function(genre) {
        if(genre) {
            genre.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

// ****************************************************************************************
//GET A LIST OF ARTISTS
app.get('/genres', function(request, response) {
    Artists.findAll().then(function(artists){
        response.status(200).send(artists)
    })
})

// GET ONE ARTIST BY ID
app.get('/artists/:id', function(request, response) {
    Artist.findOne({where: {id:request.params.id}}).then(function(artist) {
        if(artist) {
            response.status(200).send(artist)
        } else {
            response.status(404).send()
        }
    })
})

//CREATE A NEW ARTIST
app.post('/artists', function(request, response) {
    Artists.create(request.body).then(function(artist) {
        response.status(201).send(artist)
    })
})


//UPDATE
app.put('/artists/:id', function(request, response) {
    Genres.findById(request.params.id).then(function(artist) {
        if(artist) {
            artist.update(request.body).then(function(artist){
                response.status(201).send(genre)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//DELETE
app.delete('/artists/:id', function(request, response) {
    Genres.findById(request.params.id).then(function(artist) {
        if(artist) {
            artist.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//*******************************************************************
//GET A LIST OF SONGS
app.get('/songs', function(request, response) {
    Songs.findAll().then(
         function(songs) {
               response.status(200).send(songs)
        }
    )
})

// GET ONE SONG BY ID
app.get('/songs/:id', function(request, response) {
    Songs.findOne({where: {id:request.params.id}}).then(function(song) {
        if(song) {
            response.status(200).send(song)
        } else {
            response.status(404).send()
        }
    })
})

//CREATE A NEW ARTIST
app.post('/songs', function(request, response) {
    Songs.create(request.body).then(function(song) {
        response.status(201).send(song)
    })
})


//UPDATE
app.put('/songs/:id', function(request, response) {
    Songs.findById(request.params.id).then(function(song) {
        if(song) {
            song.update(request.body).then(function(song){
                response.status(201).send(song)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//DELETE
app.delete('/songs/:id', function(request, response) {
    Genres.findById(request.params.id).then(function(song) {
        if(song) {
            song.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//***************************************************************************
// GET A LIST OF USERS
app.get('/users', function(request, response) {
    Users.findAll().then(function(users){
        response.status(200).send(users)
    })
        
})

// GET ONE USER BY ID
app.get('/users/:id', function(request, response) {
    Users.findOne({where: {id:request.params.id}}).then(function(user) {
        if(user) {
            response.status(200).send(user)
        } else {
            response.status(404).send()
        }
    })
})

//CREATE A NEW USER
app.post('/users', function(request, response) {
    Users.create(request.body).then(function(user) {
        response.status(201).send(user)
    })
})

//UPDATE
app.put('/users/:id', function(request, response) {
    Users.findById(request.params.id).then(function(user) {
        if(user) {
            user.update(request.body).then(function(user){
                response.status(201).send(user)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//DELETE
app.delete('/users/:id', function(request, response) {
    Users.findById(request.params.id).then(function(user) {
        if(user) {
            user.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


//***************************************************************************************
//GET A LIST OF PLAYLISTS
app.get('/playlists', function(request, response) {
    Playlists.findAll().then(function(playlists){
        response.status(200).send(playlists)
    })
        
})

// GET ONE PLAYLIST BY ID
app.get('/playlists/:id', function(request, response) {
    Playlists.findOne({where: {id:request.params.id}}).then(function(playlist) {
        if(playlist) {
            response.status(200).send(playlist)
        } else {
            response.status(404).send()
        }
    })
})

//CREATE A NEW PLAYLIST
app.post('/playlists', function(request, response) {
    Playlists.create(request.body).then(function(playlist) {
        response.status(201).send(playlist)
    })
})


//UPDATE
app.put('/playlists/:id', function(request, response) {
    Playlists.findById(request.params.id).then(function(playlist) {
        if(playlist) {
            playlist.update(request.body).then(function(playlist){
                response.status(201).send(playlist)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//DELETE
app.delete('/playlists/:id', function(request, response) {
    Playlists.findById(request.params.id).then(function(playlist) {
        if(playlist) {
            playlist.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//***********************************************************************
//GET THE SONGS FROM ALL THE PLAYLISTS
app.get('/playlist_songs', function(request, response) {
    Playlist_Songs.findAll().then(function(playlist_songs){
        response.status(200).send(playlist_songs)
    })
        
})

// get one song from a playlist by id
app.get('/playlist_songs/:id', function(request, response) {
    Playlist_Songs.findOne({where: {id:request.params.id}}).then(function(playlist_song) {
        if(playlist_song) {
            response.status(200).send(playlist_song)
        } else {
            response.status(404).send()
        }
    })
})

//CREATE A NEW SONG IN THE PLAYLIST
app.post('/playlist_songs', function(request, response) {
    Playlist_Songs.create(request.body).then(function(playlist_song) {
        response.status(201).send(playlist_song)
    })
})

//UPDATE
app.put('/playlist_songs/:id', function(request, response) {
    Playlist_Songs.findById(request.params.id).then(function(playlist_song) {
        if(playlist_song) {
            playlist_song.update(request.body).then(function(playlist_song){
                response.status(201).send(playlist_song)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

//DELETE
app.delete('/playlist_songs/:id', function(request, response) {
    Playlist_Songs.findById(request.params.id).then(function(playlist_song) {
        if(playlist_song) {
            playlist_song.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.listen(8080)
