var React = require('react');
var createReactClass = require('create-react-class');
var TopTemplate = require('./layout/topTemplate');
var hidden = {
    display: 'none'
};

var container = {
  display: 'inline-block',
  width : '100%',
  height: '174px'
  
}

var headline = {
  padding: '0px 30px',
  display: 'inline-block',
  fontSize : '24px',
  color : '#ffffff'
}

var subheadline = {
  fontSize : '18px',
  color : '#aaaaaa'
}

var photoBox = {
  verticalAlign: 'middle',
  display: 'inline-block',
  height: '174px',
  width: '174px'
};

var inline = {
   display: 'inline-block' 
}

var MyPlaylistComponent = createReactClass({
    
    render: function(){
        var listItems = this.props.data.map(function(item){
        return (
                <tr>
                
                    <td>
                        <div style={container}>
                            <form action="/deleteArtist" method="post">
                            
                            <div style={photoBox}>
                              <a href={item.url}> <img src={item.poza}/></a>
                            </div>
                            
                            <div style={headline}>
                              {item.nume}
                            </div>
                            
                            
                                <input type="text" name = "idArtist" value={item.idArtist} style={hidden}/>
                                <input type="submit" value="delete" style={inline}/>
                            </form>
                        </div>
                    </td>
                </tr>
            ); 
        });
        return(
            <TopTemplate title='My Artists'>
            <table>
                {listItems}
            </table>
            
            </TopTemplate>
            );
    }
    
});

module.exports = MyPlaylistComponent;
