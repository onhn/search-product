import React from 'react';

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		console.log('SearchBar');

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		if (e.target.type === 'checkbox') {
			this.props.onSearchTextChange(this.props.searchText, !this.props.onlyInStock);
		} else {
			this.props.onSearchTextChange(e.target.value, this.props.onlyInStock);
		}
	}

	render() {
		const searchText = this.props.searchText;
		const onlyInStock = this.props.onlyInStock;

		return (
			<div>
				<input type="text" value={searchText}
					onChange={this.handleChange}/>
				<label>
					<input type="checkbox" value={onlyInStock} onChange={this.handleChange} />
					Only show products in stock
				</label>
			</div>
		);
	}
}

export default SearchBar;
