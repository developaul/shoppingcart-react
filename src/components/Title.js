import { Component } from "react"

class Title extends Component {
  render() { 
    return (
      <h1 style={styles.title}>Tienda</h1>
    )
  }
}

const styles = {
  title: {
    marginBottom: '30px'
  }
}

export default Title;