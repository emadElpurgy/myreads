import React, { Component } from 'react'
import Shelf from './shelf'
import { Link } from 'react-router-dom'
class Library extends Component{

	render(){
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{
							this.props.shelfs.map((shelf)=>{
                                return (
								<Shelf 
									name={shelf.name} 
									title={shelf.title} 
									Books={this.props.Books.filter((book)=>(book.shelf === shelf.name))}
									Shelfs={this.props.shelfs}  
									shelfsMap={this.props.shelfsMap}
									key={shelf.name}
									onChangeShelf={this.props.onChangeShelf}
								/>)
							})
						}
					</div>
				</div>         
				<div className="open-search">
					<Link to='/search'>Add a book</Link>
				</div>
			</div>          
		)
	}
}
export default Library