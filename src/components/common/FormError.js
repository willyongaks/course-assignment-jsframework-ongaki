import propTypes  from "prop-types";

import React from 'react'

function FormError({ children }) {
  return (
    <div>{children}</div>
  )
}
FormError.propTypes = {
    children: propTypes.node.isRequired
}

export default FormError