import Header from "../components/Header";
import Meta from "../components/Meta";

const AddPlane = () => {
	// page content
	const pageTitle = "Add Plane Spotted";
	const pageDescription = "Add a Plane Spotted by filling out this simple Form";

	return (
		<div>
			<Meta title={pageTitle} />
			<Header head={pageTitle} description={pageDescription} />
		</div>
	);
};

export default AddPlane;
