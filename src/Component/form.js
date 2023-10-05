import React, { Component } from 'react'
import axios from'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           
        }
      }
      

       submitHandlar=(e)=>{
         e.preventDefault();
         const title=e.target.title.value;
         const body=e.target.body.value;
         const data={title,body};
         axios.post("https://jsonplaceholder.typicode.com/posts",{data}).then((res)=>{
                console.log(res)
                e.target.reset()
         }).catch((err)=>{
            console.log(err)
         })
     
       }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandlar}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div> 
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="body"/>
                    </div>
                    <div className="mb-3 form-check">
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
