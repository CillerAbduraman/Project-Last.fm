var React = require('react');
var createReactClass = require('create-react-class');
var TopTemplate = require('./layout/topTemplate');
var hidden = {
    display:'none'
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
}

export default class topTracks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  

  render() {
      var listItems = this.props.data.map(function(item){
        return (
                <tr>
                    <form action="/addPlaylist" method="post">
                      <td>
                        <div style={container}>
                            <div style={photoBox}>
                              <a href={item.url}> <img src={item.image[2]['#text']}/></a>
                            </div>
                            
                            
                            <div style={headline}>
                            
                              {item.name}
                              <div style={subheadline}>
                                {item.artist.name}
                              </div>
                              
                            </div>
                            
                            <input type="text" name="url" value={item.url} style={hidden} />
                            <input type="text" name="poza" value={item.image[2]['#text']} style={hidden} />
                            <input type="text" name="titlu" value={item.name} style={hidden} />
                            <input type="text" name="artist" value={item.artist.name} style={hidden} />
                            <input type="submit" value="Add to playlist" />
                        </div>
                        
                      </td>
                    </form>
                </tr>
                
                
                
            ); 
        });
        
    return (
      <TopTemplate title='Top Tracks'>
        <table>
                {listItems}
        </table>
      </TopTemplate>
    );
  }
}
