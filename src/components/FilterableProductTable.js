import React from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {

	constructor(props) {
		super(props);
		console.log('FilterableProductTable');
		console.log(props.model);

		this.state = {
			searchText: '',
			onlyInStock: false,
		};

		this.onSearchTextChange = this.onSearchTextChange.bind(this);
	}

	onSearchTextChange(text, onlyInStock) {
		console.log('Searching for: ' + text +
			' Only in stock: ' + onlyInStock);
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTextChange={this.onSearchTextChange} />
				<ProductTable />
			</div>
		);
	}
}

export default FilterableProductTable;
