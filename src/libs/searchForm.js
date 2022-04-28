import React, { Component } from 'react'
class SearchForm extends Component{
	render(){
		return(
			<div className="search-books-input-wrapper">
				<input 
					type="text" 
					placeholder="Search by title or author" 
					value={this.props.query}          
					onChange={this.props.onchangeQuery}/>
			</div>
		)
	}
}
export default SearchForm