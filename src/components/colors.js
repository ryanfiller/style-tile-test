import React from 'react'

const Colors = (props) => {
  return (
    <React.Fragment>
        <section className="colors">
            {props.colors.map((color, index)=> {

                const backgroundColor = {
                    backgroundColor: color.hex_value
                }

                return(
                    <div className="colors__block" style={backgroundColor} key={index}>
                        <div className="colors__text">
                            <span className="colors__name">
                                ${color.color_name}
                            </span>
                            <span className="colors__hex">
                                {color.hex_value}
                            </span>
                        </div>
                    </div>
                )
            })}
        </section>
        <pre className="codeblock">
            {props.colors.map((color, index)=> {
                return(`
                    $${color.color_name}: ${color.hex_value};
                    `)        
            })}
        </pre>
    </React.Fragment>
  )
};

export default Colors;