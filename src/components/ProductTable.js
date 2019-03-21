import React from 'react';

function ProductCategoryRow(props) {
	return <h3>ProductCategoryRow</h3>;
}

function ProductRow(props) {
	return <h5>ProductRow</h5>;
}

class ProductTable extends React.Component {

	constructor(props) {
		super(props);
		console.log('ProductTable');
	}

	render() {
		return (
			<div>
				<ProductCategoryRow />
				<ProductRow />
			</div>
		);
	}
}

export default ProductTable;
