import  propTypes from "prop-types";

function Heading({ content}) {
 	return <h1 className="Heading">{content}</h1>;
}

Heading.propTypes = {
	content: propTypes.string.isRequired,
};

export default Heading