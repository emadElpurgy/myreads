import React, { Component } from 'react'
import BookList from './bookList'
class SearchResult extends Component{
	render(){
		let booksList = <h1>Try typing anything in search box.</h1>
		if(this.props.query.length > 0){
			booksList = 
			<BookList 
				Books={this.props.Books}
				shelfsMap={this.props.shelfsMap}
				Shelfs={this.props.Shelfs}
				onChangeShelf={this.props.onChangeShelf}
			/>
        }
		return(
			<div className="search-books-results">
				{booksList}
			</div>          
		)
	}
}
export default SearchResult