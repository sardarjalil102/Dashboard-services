import React, { useCallback, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { uploadFile } from "../../../../../Redux/features/AppUtilsSlice";
import DropBox from "./DropBox";
import Image from "./Image";

const ImageDropZone = ({ image }) => {
  const [images, setImages] = useState([]);
  var data = new FormData();
  const dispatch = useDispatch();
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.map((file, index) => {
        const reader = new FileReader();

        reader.onload = function (e) {
          setImages((prevState) => [
            ...prevState,
            { id: index, src: e.target.result },
          ]);
        };
        data.append("file", file);
       // // // console.log(file);

        dispatch(uploadFile(data));
        reader.readAsDataURL(file);
        return file;
      });
    },
    [dispatch]
  );

  // useLayoutEffect(() => {
  //   setImages([{ src: image }]);
  //   return () => {
  //     setImages([]);
  //   };
  // }, [image]);
  return (
    <div>
      {!images[0] ? <DropBox onDrop={onDrop} /> : <Image image={images[0]} />}
    </div>
  );
};

export default ImageDropZone;
