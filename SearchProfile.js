import React from "react";

const   SearchProfile =props=>(
       <form onSubmit={props.getInformation}>
           <input type="text" name="name" placeholder="Enter Your Name..."/>
          <button>Search</button>
           </form>
    );
export default SearchProfile
