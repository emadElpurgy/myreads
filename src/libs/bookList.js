import React, { Component } from 'react'
import BookControl from './bookControl'
import notfound from '../icons/notfound.png';
class BookList extends Component{
	render(){
		if(this.props.Books.length === 0){
			/******empty result ****/
			return (<div><h1>No books found.</h1></div>)
        }
		return (
			<ol className="books-grid">
				{
					this.props.Books.map((book)=>(          
						<li key={book.id}>
							<div className="book">
								<div className="book-top">
									<div className="book-cover" 
										style={
												{ 
													width: 128, 
													height: 193,

													backgroundImage:`url(${book.imageLinks && book.imageLinks.smallThumbnail ?  book.imageLinks.smallThumbnail : notfound })`}
												}
									></div>
									<div className="book-shelf-changer">
									<BookControl 
                                    	Shelfs={this.props.Shelfs} 
                                        Book={book}
                                        shelfsMap={this.props.shelfsMap}
										onChangeShelf={this.props.onChangeShelf}                                        
									/>  
								</div>
							</div>
							<div className="book-title">{book.title}</div>
								<div className="book-authors">{book.authors ? book.authors.map(author=>(author)): "" }</div>
							</div>
						</li>
					))          
				}
			</ol>            
		)
	}
}
export default BookList