import React from "react";
import Title from "./Component/Title";
import SearchProfile from "./Component/SearchProfiile/SearchProfile"
import Profile from "./Component/Profile";

const API = "https://api.github.com/users";

class App extends React.Component{
  state ={
    name :undefined,
    avatar:undefined,
    reponame:undefined,
    description:undefined,
    forks:undefined,
    openissues:undefined,
    error:undefined
  }
  getInformation=async(e)=>{
    e.preventDefault();
    const name =e.target.elements.name.value;
    const api_call=await  fetch(`https://api.github.com/search/repositories?q=${name}&appid=${API}`)
    const data = await api_call.json()
if(name){
  console.log(data);
  this.setState({
    name:data.name,
    avatar:data.avatar_url,
    reponame:data.html_url,
    description:data.description,
    forks:data.forks_count,
    openissues:data.open_issues,
    error:""
  });

}else{
  
      this.setState({
      
      name:undefined,
        avatar:undefined,
        repositoryname:undefined,
        description:undefined,
        forks:undefined,
        openissues:undefined,
        error:"please Enter the values"
      });

    }
}
render(){

  return(

<div>
  <div className ="wrapper">
  <div className="main">
  <div className="container">
  <div className="row">
       <div className="col-xs-5 title-contanier">
       <img src = {this.state.avatar} alt="Profile Image"/>
       <Title/>
       </div>
       <div className="col-xs-7 form-container">
       <SearchProfile  getInformation={this.getInformation}/>
       <Profile

       name = {this.state.name}
       avatar={this.state.avatar}  
       reponame ={this.state.reponame}
       description={this.state.description}
       forks={this.state.forks}
       openissues={this.state.openissues}
       error ={this.state.error}/>
       </div>
       </div>
       </div>
       </div>
       </div>
       </div>

  );
}
};
export default App

