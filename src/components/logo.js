import React from 'react'
import SVG  from 'react-inlinesvg'

const Logos = ({ logos }) => {
  return (
    <div className="logos-wrapper">
        { console.log(logos) }
        {/* <SVG src={rocket} className="site-footer__rocket" /> */}
    </div>
  )
};

export default Logos;