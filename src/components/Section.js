import React from 'react'

function Section({title, width, height}) {

    let styles ={
        width: width,
        height: height,
        borderRadius: "20px",
    }

  return (
    <div className="section" style={styles}>{title}</div>
  )
}

export default Section