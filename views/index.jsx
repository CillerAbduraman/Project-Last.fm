var React = require('react');
var createReactClass = require('create-react-class');
var generalStyle = {
    backgroundImage : 'url(http://eskipaper.com/images/dark-background-8.jpg)'
}
var box = {
    width : '40vw',
    height: '20vw',
    paddingLeft:'35vw',
    paddingTop:'15vw',
    
}
var elem = {
    marginTop:'120px',
    marginRight:'60px',
    display: 'inline-block'
}
var title={
    color: '#ffffff',
    fontSize:'40px',
    textAllign: 'center',
    paddingBottom:'40px'
}
var IndexComponent = createReactClass({
    render: function(){
        return (
            <html>
                <head>
                    <title>
                        player-app
                    </title>
                </head>
                <body style = {generalStyle}>
                    <div style={box}>
                        <div style={title}>
                            My online playlist
                        </div>
                        <form action="/searchSongs" method = "post">
                            <input type="text" name="title"/>
                            <input type="submit" value="Search"/>
                        </form>
                        <a href="/topArtist" style={elem}>
                          <input type="submit" value="Top Artists"/>
                        </a>
                        
                        <a href="/topTracks" style={elem}>
                          <input type="submit" value="Top Tracks"/>
                        </a>
                        
                        <a href="/myPlaylist" style={elem}>
                          <input type="submit" value="My Playlist"/>
                        </a>
                        
                        <a href="/myArtists" style={elem}>
                          <input type="submit" value="My Artists"/>
                        </a>
                        
                    </div>
                </body>
            </html>
                
        )
    } 
});

module.exports = IndexComponent;
