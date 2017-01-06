import React, { Component } from 'react';
import { connect } from 'react-redux';
//react-redux is the glue between react and redux
//import w/ curly braces pulls of a single property
//import w/o curly braces pulls the entire object
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  //takes in all application state
  //whatever is returned from here will show up as props inside BookList
  return {
    books: state.books
  }
}

//anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
  //whenver selectBook is called, the result should be passed to all reducers via bindActionCreators
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

//promote BookList from a component to a container - it needs to know about new dispatch method, selectBook; make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
