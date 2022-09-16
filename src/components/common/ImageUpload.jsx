import React, { useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { BiImageAdd } from "react-icons/bi";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { clearFileState, uploadFile } from "../../Redux/features/AppUtilsSlice";
import Spinner from "./Spinner";

const ImageUpload = ({ image, edit }) => {
  const dispatch = useDispatch();
  const [images, setImages] = React.useState([]);
  const imageUploadData = new FormData();

  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
    imageUploadData.append("file", imageList[0].file);
    dispatch(uploadFile(imageUploadData));
    dispatch(clearFileState());
  };

  const { fileData, status } = useSelector((state) => state.AppUtils);

  useEffect(() => {
    if (image) {
      // // console.log("image found :", image);
      const img = [
        {
          data_url: image,
          file: {},
        },
      ];

      setImages(img);
    }
    // // console.log(" without image :", images);
    return () => {};
  }, [image]);
  const getColor = (props) => {
    if (props.isDragAccept) {
      return "#00e676";
    }
    if (props.isDragReject) {
      return "#ff1744";
    }
    if (props.isFocused) {
      return "#2196f3";
    }
    return "#eeeeee";
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

  if (status === "loading") {
    return <Spinner />;
  }
  return (
    <>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "png"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          isDragging,
          onImageRemove,
          dragProps,
        }) => (
          // write your building UI
          <section className="dropbox">
            {!imageList[0]?.data_url ? (
              <Container
                style={{ height: "60vh" }}
                onClick={() => {
                  if (edit || imageList[0] !== null) {
                    onImageUpload();
                  }
                }}
                {...dragProps}
                className={`pointer mt-2 justify-content-center align-items-center m-auto rounded ${
                  isDragging ? "border-success" : null
                }`}
              >
                <h5
                  className={`tex-muted text-center ${
                    images.length === 0 ? " d-block " : " d-none"
                  }`}
                >
                  Drag 'n' drop file here
                </h5>
                <BiImageAdd
                  color="#677788"
                  className={`w-100 ${
                    images.length === 0 ? " d-block " : " d-none"
                  }`}
                  style={isDragging ? { color: "#00e676" } : null}
                  size={"6rem"}
                />
                {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
              </Container>
            ) : (
              <div
                style={{
                  height: "58vh",
                  width: "100%",
                }}
              >
                <img
                  style={{ objectFit: "fill" }}
                  src={imageList[0]?.data_url}
                  alt=""
                  width={"100%"}
                />
                {edit ? (
                  <div className="text-center mt-3">
                    <button
                      className="btn-sm btn-primary mx-1"
                      onClick={() => onImageUpdate(0)}
                    >
                      Update
                    </button>
                    <button
                      className="btn-sm btn-primary mx-1"
                      onClick={() => onImageRemove(0)}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
            <div
              className={`row ${images.length === 0 ? " d-block " : " d-none"}`}
            >
              <div className="col-12 text-end">
                <p className="fs-7 text-muted">
                  UPLOAD PHOTO (Allowed file type format: png, jpg, jpeg)
                </p>
              </div>
            </div>
          </section>
        )}
      </ImageUploading>
    </>
  );
};

export default ImageUpload;
