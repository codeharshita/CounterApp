import React, { Component } from 'react';


 class Counter extends Component {
    state={
        count:0,
        tags: ["tag1","tag2","tag3"]
    }

    styles ={
        fontSize: "25px",
        fontWeight:"bold"
       
    }



 render() { 
    return (
        <div> 
            <span  className={this.getBadgeClasses()}>{this.incrCnt()}</span>
            <button className='btn btn-seccondry btn-lg'>Increment</button>
            <ul>{this.state.tags.map(tag => <li key ={tag}>{tag}</li>)}</ul>
         </div>
        );
    }

    getBadgeClasses() {
         let classes = "badge m-2 badge-";
         classes += this.state.count === 0 ? "warning" : "primary";
         return classes;
     }

    incrCnt(){
        const count = this.state.count
        return count == 0 ? 'Zero': count;

    }
 }
  
 export default Counter;