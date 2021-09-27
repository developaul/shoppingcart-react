import { Component } from 'react'

import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'


class App extends Component {
  state = {
    products: [
      {
        name: 'Tomate',
        price: 1500,
        img: '/products/tomate.jpg'
      },
      {
        name: 'Arbejas',
        price: 2500,
        img: '/products/arbejas.jpg'
      },
      {
        name: 'Lechuga',
        price: 500,
        img: '/products/lechuga.jpg'
      }
    ],
    cart: [],
    cartIsVisible: false
  }

  showCart = () => {
    if (!this.state.cart.length) return
    this.setState({ cartIsVisible: !this.state.cartIsVisible })
  }

  addProduct = product => {
    const { cart } = this.state

    if (cart.find(p => p.name === product.name)) {
      const newCart = cart.map(p => p.name === product.name ? ({ ...p, quantity: p.quantity + 1 }) : p)
      return this.setState({ cart: newCart })
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1
      })
    })
  }

  render() {
    const { cartIsVisible, cart, products } = this.state

    return (
      <div>
        <Navbar
          cartIsVisible={cartIsVisible}
          showCart={this.showCart}
          cart={cart}
        />

        <Layout>
          <Title />
          <Products
            addProduct={this.addProduct}
            products={products}
          />
        </Layout>
      </div>
    )
  }
}

export default App