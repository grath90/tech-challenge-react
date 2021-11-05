import React from 'react'

const Contact = ({ visible }) => {
  return (
    <span>
      {
        visible
        ?
          <div>
            <h3>Heading Two</h3>
          </div>
        :
          <span />
      }
    </span>
  )
}

export default Contact