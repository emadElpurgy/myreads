import React, { Component } from 'react'
import BookList from './bookList'
class Shelf extends Component{
	render(){
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<BookList 
						Books={this.props.Books}
						Shelfs={this.props.Shelfs}
						shelfsMap={this.props.shelfsMap}
						onChangeShelf={this.props.onChangeShelf}
					/>
				</div>
			</div>
		)
	}
}
export default Shelf;