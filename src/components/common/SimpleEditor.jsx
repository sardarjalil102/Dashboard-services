import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { key } from "../../config";

const SimpleEditor = (props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    log: () => {
      // console.log("reponse from editor:");
      if (inputRef.current) {
        // console.log(inputRef.current.getContent());
        return inputRef.current.getContent();
      }
    },
  }));

  return (
    <Editor
      {...props}
      apiKey={key.apiKey.tinyEditor}
      onInit={(evt, editor) => (inputRef.current = editor)}
      initialValue={props?.consent}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "a11ychecker",
          "advlist",
          "advcode",
          "advtable",
          "autolink",
          "checklist",
          "export",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "powerpaste",
          "fullscreen",
          "formatpainter",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | casechange blocks | bold italic backcolor | " +
          "alignleft aligncenter alignright alignjustify | " +
          "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
};

export default forwardRef(SimpleEditor);
