import React, { Component } from 'react'

class Cube extends Component {
  render() {
    const { estilo } = this.props

    return (
      <div style={estilo}>
        <section >
          <div className='sk-folding-cube'>
            <div className='sk-cube sk-cube-1'></div>
            <div className='sk-cube sk-cube-2'></div>
            <div className='sk-cube sk-cube-4'></div>
            <div className='sk-cube sk-cube-3'></div>
          </div>
        </section>
      </div>   
    )
  }
}

export default Cube
