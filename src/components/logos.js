import React from 'react'
import SVG  from 'react-inlinesvg'

const Logos = ({ logos }) => {
  return (
    <React.Fragment>
      <header className="section-title">
        Favicons
      </header>
      <div className="logos-wrapper">
        {logos.map((logo, index) => {

          const backgroundColor = {
            backgroundColor: logo.background_color,
          }

          return (
            <div className="logo-box" style={backgroundColor} key={index}>
              <SVG src={logo.logo} className="logo" />
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
};

export default Logos;