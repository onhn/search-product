import React from 'react';

import './ProductTable.css';

function ProductCategoryRow(props) {
	return <tr className="Category"><td colSpan="2">{props.category}</td></tr>;
}

function ProductRow(props) {
	return (
		<tr className="Product-row">
			<td>{props.name}</td>
			<td>{props.price}</td>
		</tr>
	);
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
		const cat = this.splitCategories(this.props.model);
		const rows = [];

		for(var i = 0; i < cat.length; ++i) {
			rows.push(
				<ProductCategoryRow category={cat[i].name}
					key={cat[i].name} />
			);
			for (var j = 0; j < cat[i].products.length; ++j) {
				rows.push(
					<ProductRow name={cat[i].products[j].name}
						key={cat[i].products[j].name}
						price={cat[i].products[j].price} />
				);
			}
		}

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

export default ProductTable;
