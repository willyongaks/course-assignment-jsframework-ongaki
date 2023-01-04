import propTypes  from "prop-types";


function FormError({ children }) {
  return (
    <div>{children}</div>
  )
}
FormError.propTypes = {
    children: propTypes.node.isRequired
}

export default FormError