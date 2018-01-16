var React = require('react');
var createReactClass = require('create-react-class');
var generalStyle = {
    backgroundImage : 'url(http://eskipaper.com/images/dark-background-8.jpg)'
}
var title={
    color: '#ffffff',
    fontSize:'40px',
    textAllign: 'center',
    marginLeft:'35vw',
    marginTop:'5vw'
}
var back = {
    marginLeft:'30vw',
}

var ConfirmComponent = createReactClass({
    render: function(){
        return (
            <html>
                <head>
                </head>
                <body style = {generalStyle}>
                    <div>
                        <br></br>
                        <div style={title}>
                            {this.props.title}
                            
                        </div>
                        <a href="../" style = {back}>
                            <input type="submit" value="Inapoi"/>
                            </a>
                    </div>
                </body>
            </html>
                
        )
    } 
});

module.exports = ConfirmComponent;
