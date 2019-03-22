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
		console.log(props.model);

		this.splitCategories = this.splitCategories.bind(this);
	}

	splitCategories(model) {
		if (model.length === 0) return model;

		let newCat = [];
		let cat_idx = 0;
		let tmpCat = model[0].category;
		newCat[0] = {name: tmpCat, products: []};
		for (let i = 0; i < model.length; ++i) {
			if (i !== 0 && model[i].category !== tmpCat) {
				++cat_idx;
				tmpCat = model[i].category;
				newCat[cat_idx] = {name: tmpCat, products: []};
			}
			newCat[cat_idx].products.push({
				name: model[i].name,
				price: model[i].price
			});
		}

		console.log('Split categories: ', newCat);
		return newCat;
	}

	render() {
		const splitCategories = this.splitCategories(this.props.model);

		return (
			<div>
				<ProductCategoryRow />
				<ProductRow />
			</div>
		);
	}
}

export default ProductTable;
