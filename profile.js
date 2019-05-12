import React from "react";

// class Weather extends React.Component{


const Profile=(props)=>(

        <div className="profile__info"> 
         
         {
               props.name && <p className="profile__key">Name: 
              <span> {props.name}
              </span>
              </p>
            }
          {
              props.avatar&&<p className="profile__key">Avatar:
    
            <span><img src={this.props.avatar} alt="Profile image" />
            </span>
            </p> 
        }
           {
               props.reponame && <p className="profile__key">RepositoryName: 
              <span> {props.reponame}
              </span>
              </p>
            }
          {
              props.description && <p className="profile__key">RepositoryDescription: 
              
             <span> {props.description}</span>
              
              </p>
              
              }
           {
                props.forks&& <p className="profile__key">ForksCount: 
              
                <span> {props.forks}</span>
                 
                 </p>
               
            }
          
            {
                props.openissues && <p className="profile__key">IssuesCount:
                <span>{props.openissues}</span>
                
                </p>
            }
        </div>
    );



export default Profile
