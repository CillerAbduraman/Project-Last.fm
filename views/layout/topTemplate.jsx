var React = require('react');
var createReactClass = require('create-react-class');
var generalStyle = {
    backgroundImage : 'url(http://eskipaper.com/images/dark-background-8.jpg)'
}
var box = {
    width : '40vw',
    height: '30vw',
    marginLeft:'35vw',
    marginTop:'5vw',
    overflowY: 'scroll'
    
}
var title={
    color: '#ffffff',
    fontSize:'40px',
    textAllign: 'center',
    marginLeft:'35vw',
    marginTop:'5vw'
}
var back = {
    marginLeft:'70px'
}
var TopTemplate = createReactClass({
    render: function(){
        return (
            <html>
                <head>
                    <title>
                        player-app
                    </title>
                </head>
                <body style = {generalStyle}>
                    <div style={title}>
                        {this.props.title}
                    </div>
                    <div style={box}>
                    {this.props.children}
                    </div>
                    <a href="../">
                      <input type="submit" value="Back" style={back}/>
                    </a>
                </body>
            </html>
        )
    } 
});

module.exports = TopTemplate;
