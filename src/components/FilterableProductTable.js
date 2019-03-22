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
			filteredModel: props.model,
		};

		this.onSearchTextChange = this.onSearchTextChange.bind(this);
	}

	onSearchTextChange(searchText, onlyInStock) {
		console.log('Searching for: ' + searchText +
			' Only in stock: ' + onlyInStock);
		let filteredModel = this.props.model.filter(o =>
			o.category.includes(searchText) ||
			o.name.includes(searchText)
		);
		if (onlyInStock) {
			filteredModel = filteredModel.filter(o => o.stocked);
		}
		console.log(filteredModel);
		this.setState({
			searchText,
			onlyInStock,
			filteredModel,
		});
	}

	render() {
		return (
			<div>
				<SearchBar
					searchText={this.state.searchText}
					onlyInStock={this.state.onlyInStock}
					onSearchTextChange={this.onSearchTextChange} />
				<ProductTable model={this.state.filteredModel} />
			</div>
		);
	}
}

export default FilterableProductTable;
