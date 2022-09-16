import { useDropzone } from 'react-dropzone';

import styled from 'styled-components';
import {BiImageAdd} from 'react-icons/bi';

const getColor = (props) => {
	if (props.isDragAccept) {
		return '#00e676';
	}
	if (props.isDragReject) {
		return '#ff1744';
	}
	if (props.isFocused) {
		return '#2196f3';
	}
	return '#eeeeee';
};

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px;
	border-width: 2px;
	border-radius: 10px;
	border-color: ${(props) => getColor(props)};
	border-style: dashed;
	background-color: #fafafa;
	color: black;
	font-weight: bold;
	font-size: 1.4rem;
	outline: none;
	transition: border 0.24s ease-in-out;
`;

function DropBox({ onDrop }) {
	const {
		getRootProps,
		getInputProps,
		acceptedFiles,
		open,
		isDragAccept,
		isFocused,
		isDragReject,
	} = useDropzone({
		accept: 'image/*',
		onDrop,
		noClick: true,
		noKeyboard: true,
	});
	return (
		<>
			<section className="dropbox">
				<Container
					className="dropbox justify-content-center align-item-center mt-2" style={{height: "60vh"}}
					{...getRootProps({ isDragAccept, isFocused, isDragReject })}
				>
					<input {...getInputProps()} />
					<h5 className='tex-muted'>Drag 'n' drop some files here</h5>
					<button type="button" className="btn bg-light" onClick={open}>
					<BiImageAdd size={'6rem'} />
					</button>
				</Container>
			</section>
		</>
	);
}

export default DropBox;
