import React,{Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state={
    user:{
      useravatar:'',
      followers:'',
      following:'',
      public_repos:''
    }
  }

  getName = () =>{
    var val = this.refs.val.value;
    axios.get(`http://api.github.com/users/${val}`)
    .then(res => {
      this.setState({
        user:{
        useravatar:res.data.avatar_url,
        followers:res.data.followers ,
        following:res.data.following,
        public_repos:res.data.public_repos
        }
      });
      console.log()
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() { 
    const {user} = this.state;
    return (
      <div className="container">
       <div className="App">
         <input type="text" placeholder="Search For User" ref="val"/>
         <button onClick={this.getName}>Search</button>
         </div> 
         <div className="grid">
            <div className="img"><img src={user.useravatar} width="200px" alt={user.useravatar}/></div>
            <div>Repositories: {user.public_repos}</div>
            <div>Followers: {user.followers}</div>
            <div>Following: {user.following}</div>
         </div>
      </div>
      );
  }
}
 
export default App;
