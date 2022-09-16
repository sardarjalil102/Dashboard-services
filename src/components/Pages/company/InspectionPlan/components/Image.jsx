import React from "react";

function Image({ image }) {
	return (
		<div className="mt-2 align-items-center justify-content-center rounded" style={{height: "60vh", border: "1px solid #e7eaec"}}>
			<img className="rounded p-2" height={"100%"} width={"100%"} style={{objectFit: 'fill'}} alt='' src={image?.src} />
		</div>
	);
}

export default Image;
