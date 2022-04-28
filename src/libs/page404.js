import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class page404 extends Component{  
	render(){
		return(
			<div>
				<h1>Page Not  Found (404)</h1>
      			<Link to="/">Go to home page</Link>
			</div>)
	}
}
export default page404