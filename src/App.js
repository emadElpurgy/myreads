import React from 'react'
import Library from './libs/library'
import Search from './libs/search'
import page404 from './libs/page404'
import './App.css'
import { Route , Switch } from 'react-router-dom'
import * as BooksApi from './BooksAPI'

class BooksApp extends React.Component {
  state = {
		shelfs:[],
		Books:[],
		BookShelfMap:[]
  }
	componentDidMount() {
		BooksApi.getAll()
		.then((Books) => {
          console.log(Books)
			/*** shelf names ******/
			let shelfs = [
				{name:"currentlyReading",title:"Currently Reading"},
				{name:"wantToRead",title:"Want To Read"},
				{name:"read",title:"Read"}
			]
			//used to get current shelf for book id            
            let map = []
			Books.map((book)=>{
				map[book.id] = book.shelf
				return map
			})

			/****** populate state with array of books and array of shelfs ******/
			this.setState(() => ({
				Books,
				shelfs,
				BookShelfMap:map
			}))
		})
	}

	updateBook(e,book){		
		console.log(book.id + ':' + e.target.value);
		var index = this.state.Books.findIndex(b => b.id === book.id);
		let newBooks = this.state.Books
		let map = this.state.BookShelfMap
		/****update book shelf on map array
		*****if book not found in array will add it to array and if found will update
        **********************************/
		map[book.id] = e.target.value      
		if(index > -1){
			//book in my library then only update shelf
			newBooks[index].shelf = e.target.value
		}else{
			//book not found in my library then add then book to library after set its shelf
			let newBook = book          
			newBook.shelf = e.target.value
			newBooks = newBooks.concat(newBook)          
		}
		//local update state
		this.setState((currentState) => ({
			Books:newBooks,
			BookShelfMap:map
		}))
		//update server
		BooksApi.update(book,e.target.value)
    }
  
	render() {      
		return (
			<div className="app">
				<Switch>
					<Route exact path='/' render={() => (
						<Library
							Books={this.state.Books}
							shelfs={this.state.shelfs}
							shelfsMap={this.state.BookShelfMap}
							onChangeShelf={(e,book)=>{this.updateBook(e,book)}}
						/>
					)}/>
					<Route exact  path='/search/:query?' render={(props) => (
						<Search
							Books={this.state.Books}
							shelfs={this.state.shelfs}
							shelfsMap={this.state.BookShelfMap}
							onChangeShelf={(e,book)=>{this.updateBook(e,book)}}                  
							{...props}
						/>
					)}/>
					<Route component={page404}/>
				</Switch>
			</div>
		)
	}
}

export default BooksApp
