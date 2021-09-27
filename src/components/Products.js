import { Component } from "react";

import Product from './Product'

class Products extends Component {
  render() {
    const { products, addProduct } = this.props

    return (
      <div style={styles.products}>
        {products.map(product => (
          <Product
            key={product.name}
            addProduct={addProduct}
            product={product}
          />
        ))}
      </div>
    )
     
  }
}

const styles = {
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}


export default Products