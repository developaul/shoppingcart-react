import { Component } from "react"

class BubbleAlert extends Component {

  getNumber(n) {
    if(!n) return ''
    return n > 9 ? '9+' : n
  }

  render() { 
    const { value } = this.props

    return (
      <span style={styles.bubbleAlert}>
        {this.getNumber(value)}
      </span>
    )
  }
}

const styles = {
  bubbleAlert: {
    backgroundColor: '#E9725A',
    borderRadius: '15px',
    color: '#FFF',
    padding: '2px 10px',
    fontSize: '0.9rem',
    width: '20px'
  }
}

export default BubbleAlert