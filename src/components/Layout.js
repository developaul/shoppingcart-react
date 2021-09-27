import { Component } from "react"

class Layout extends Component {
  render() {
    const { children } = this.props
    
    return (
      <div style={styles.layout}>
        <div style={styles.container}>
          {children}
        </div>
      </div>
    )
  }
}

const styles ={
  layout: {
    backgroundColor: '#FFF',
    color: '#0A283E',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    width: '1200px'
  }
}

export default Layout;