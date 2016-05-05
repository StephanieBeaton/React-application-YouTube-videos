import React, {Component} from 'react';

// {Component} is the same as
// const Component = React.Component

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};
    // this.state = { term: 'Starting Value'};
  }

  render() {
    return (
      <div>
          <input value = {this.state.term}
                 onChange={event => this.setState({ term: event.target.value })} />

      </div>
    );
  }

  // onInputChange(event) {
  //   console.log(event.target.value);

  // }
}


// Functional Component
//
// const SearchBar = () => {
//   return <input />;
// }

export default SearchBar;
