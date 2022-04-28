import React, { Component } from 'react'
class BookControl extends Component{
	render (){           
		return(         
			<select 
				value={this.props.shelfsMap[this.props.Book.id] || "none"} 
				onChange={(e)=>{this.props.onChangeShelf(e,this.props.Book)}}
			>
				<option key="move" value="move" disabled>Move to...</option>
				{
					this.props.Shelfs.map((shelf)=>(
						<option 
							key={shelf.name} 
							value={shelf.name} 
					>{shelf.title}</option>
					))
				}
				<option key="none" value="none">None</option>
			</select>          
		)
	}
}
export default BookControl