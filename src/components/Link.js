import '../index.css'
import React from 'react';

function Link(props) {
  const element =
    <a className='link' href={props.link}>{props.label}</a>
  return element
}

export default Link
