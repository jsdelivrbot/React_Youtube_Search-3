import React, {Component} from 'react';


class SearchBar extends Component {
    
    constructor(props){
        super(props);
        this.state = {term: ''};
    }
    
    
    render() {
        return (
            <div className="search-bar">
            <input onKeyUp={event => this.onInputChange(event.target.value)} type="text"/>
            </div>

);
    } 
    
    onInputChange(term) {
        this.setState({term});
        console.error(this.props);
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

