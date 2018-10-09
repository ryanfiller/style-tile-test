import React from 'react'
import Favicons from './favicons'

const SiteInfo = (props) => {
  return (
    <section className="site-info">
        <h1 className="site-info__title">
          {props.title}
        </h1>
        <div className="site-info__beta-info">
          #{props.siteNumber} | <a href={props.url}>{props.url}</a>
        </div>

        <Favicons icon={props.favicon} />
    </section>
  )
};

export default SiteInfo;