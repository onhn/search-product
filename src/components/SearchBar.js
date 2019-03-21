import React from 'react';

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		console.log('SearchBar');

		this.state = {
			onlyInStock: false,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({onlyInStock: !this.state.onlyInStock });
		this.props.onSearchTextChange(e.target.value, this.state.onlyInStock);
	}

	render() {
		const searchText = this.props.searchText;

		return (
			<div>
				<input type="text" value={searchText}
					onChange={this.handleChange}/>
				<label>
					<input type="checkbox" value={this.state.onlyInStock} onChange={this.handleChange} />
					Only show products in stock
				</label>
			</div>
		);
	}
}

export default SearchBar;
