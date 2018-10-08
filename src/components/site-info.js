import React from 'react'
import Favicons from './favicons'

const SiteInfo = (props) => {
  return (
    <section className="site-info">
        <Favicons icon={props.favicon} />
        {props.title}
        <a href={props.url}>{props.url}</a>
    </section>
  )
};

export default SiteInfo;