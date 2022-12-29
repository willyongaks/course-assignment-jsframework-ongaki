import  propTypes from "prop-types";

function Heading({ content}) {
 	return <h1>{content}</h1>;
}

Heading.propTypes = {
	content: propTypes.string.isRequired,
};

export default Heading