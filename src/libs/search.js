import React, { Component } from 'react'
import SearchForm from './searchForm'
import SearchResult from './searchResult'
import { Link  } from 'react-router-dom'
import * as BooksApi from '../BooksAPI'

class Search extends Component{  
	timer=null
	waiting=false
	state={
		query:"",
		allBooks:[],
		lastQuery:false
	}  
	resetTimer(){
		/******* this function used for throttle **********
		******** when request end whether with success or with error set waiting flag of and reset the timer id 
		**************************************************/
		this.waiting = false
		this.timer = null
    }
  
	componentDidMount() {
		//if user bookmark the url 
		let params = new URLSearchParams(this.props.location.search)
		let query = params.get("q")        
		if(query && query.length > 0){
			this.updateQuery(query);
		}
    }
	updateQuery(query){
		this.setState(() => ({query}))
		//cancel pending query before add the new query
		//if waiting flag is true then cancel the waiting request befor make the new one
		if(this.waiting){
			clearTimeout(this.timer)
			//console.log("throttling timer reseted")
		}
      	//set waiting flag add query to queue
		this.waiting = true
		this.timer = setTimeout(()=>{
			if(String(query).length === 0){
				//if query is empty string then set result to empty array
				this.setState(() => ({allBooks:[]}))
			}else{
				BooksApi.search(query,10).then((allBooks)=>{
					if(allBooks && allBooks.length > 0){
						//if api returns object then add it to result 
						this.setState(() => ({allBooks})).then(this.resetTimer)
					}else{
						//if api return no value set the result to empty array
						this.setState(() => ({allBooks:[]})).then(this.resetTimer)
					}
				}).catch(error=>{
						console.log(error)
						this.resetTimer()
					})
			}
			//set the url so user can bookmark search 
			this.props.history.replace('/search/?q='+query)
		},500)
	}

	render(){
		return(
			<div className="search-books">
				<div className="search-books-bar">
					<Link className='close-search' to='/'>Close</Link>          
					<SearchForm 
						query={this.state.query}
						onchangeQuery={(e) => this.updateQuery(e.target.value)}
					/>
				</div>
				<SearchResult 
					query={this.state.query}
					Books={this.state.allBooks}
					shelfsMap={this.props.shelfsMap}
					Shelfs={this.props.shelfs}  
					onChangeShelf={this.props.onChangeShelf}
				/>
			</div>          
		)      
	}
}
export default Search