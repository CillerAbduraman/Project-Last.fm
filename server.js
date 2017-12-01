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

app.use('/nodeadmin', nodeadmin(app))
app.use(express.static('public'))
app.use('/admin', express.static('admin'))
app.use(express.json());      
app.use(express.urlencoded()); 

//get a list of genres
app.get('/genres', function(request, response) {
    Genres.findAll().then(function(genres){
        response.status(200).send(genres)
    })
})

// get one genre by id
app.get('/genres/:id', function(request, response) {
    Genres.findOne({where: {id:request.params.id}}).then(function(genre) {
        if(genre) {
            response.status(200).send(genre)
        } else {
            response.status(404).send()
        }
    })
})


//create a new genre
app.post('/genres', function(request, response) {
    Genres.create(request.body).then(function(genre) {
        response.status(201).send(genre)
    })
})


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


//get a list of artists
app.get('/artists', function(request, response) {
    Artists.findAll().then(function(artists){
        response.status(200).send(artists)
    })
})

// get one artist by id
app.get('/artists/:id', function(request, response) {
    Artists.findOne({where: {id:request.params.id}}).then(function(artist) {
        if(artist) {
            response.status(200).send(artist)
        } else {
            response.status(404).send()
        }
    })
})
//create a new artist
app.post('/artists', function(request, response) {
    Artists.create(request.body).then(function(artist) {
        response.status(201).send(artist)
    })
})


app.put('/artists/:id', function(request, response) {
    Artists.findById(request.params.id).then(function(artist) {
        if(artist) {
            artist.update(request.body).then(function(artist){
                response.status(201).send(artist)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.delete('/artists/:id', function(request, response) {
    Artists.findById(request.params.id).then(function(artist) {
        if(artist) {
            artist.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


//get a list of songs
app.get('/songs', function(request, response) {
    Songs.findAll().then(function(songs){
        response.status(200).send(songs)
    })
})

// get one Song by id
app.get('/songs/:id', function(request, response) {
    Songs.findOne({where: {id:request.params.id}}).then(function(song) {
        if(song) {
            response.status(200).send(song)
        } else {
            response.status(404).send()
        }
    })
})

//create a new song
app.post('/songs', function(request, response) {
    Songs.create(request.body).then(function(song) {
        response.status(201).send(song)
    })
})


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

app.delete('/songs/:id', function(request, response) {
    Songs.findById(request.params.id).then(function(song) {
        if(song) {
            song.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})




//get a list of playlists
app.get('/playlist', function(request, response) {
    Playlist.findAll().then(function(playlist){
        response.status(200).send(playlist)
    })
})

// get one playlist by id
app.get('/playlist/:id', function(request, response) {
    Playlist.findOne({where: {id:request.params.id}}).then(function(playlist) {
        if(playlist) {
            response.status(200).send(playlist)
        } else {
            response.status(404).send()
        }
    })
})
//create a new playlist
app.post('/playlist', function(request, response) {
    Playlist.create(request.body).then(function(playlist) {
        response.status(201).send(playlist)
    })
})


app.put('/playlist/:id', function(request, response) {
    Playlist.findById(request.params.id).then(function(playlist) {
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

app.delete('/playlist/:id', function(request, response) {
    Playlist.findById(request.params.id).then(function(playlist) {
        if(playlist) {
            playlist.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


//get a list of songs
app.get('/songs', function(request, response) {
    Songs.findAll().then(function(songs){
        response.status(200).send(songs)
    })
})

// get one Song by id
app.get('/songs/:id', function(request, response) {
    Songs.findOne({where: {id:request.params.id}}).then(function(song) {
        if(song) {
            response.status(200).send(song)
        } else {
            response.status(404).send()
        }
    })
})

//create a new song
app.post('/songs', function(request, response) {
    Songs.create(request.body).then(function(song) {
        response.status(201).send(song)
    })
})


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

app.delete('/songs/:id', function(request, response) {
    Songs.findById(request.params.id).then(function(song) {
        if(song) {
            song.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})




