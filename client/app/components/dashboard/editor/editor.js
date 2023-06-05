"use client";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { useRouter } from "next/navigation";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import useLocalStorage from "../../hooks/useLocalStorage";

const MyEditor = () => {
  const router = useRouter();

  const [body, setBody] = useLocalStorage("body", "");

  const API_URl = `${process.env.NEXT_PUBLIC_API_DOMAIN}`;
  const UPLOAD_ENDPOINT = "api/blog/blogimage";

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();

          loader.file.then((file) => {
            body.append("postImage", file);
            fetch(`${API_URl}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body,
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({ default: `${API_URl}/images/${res.postImage}` });
              })
              .catch((error) => {
                reject(error);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div className="min-w-[80%]">
      <div className="App">
        <CKEditor
          config={{
            extraPlugins: [uploadPlugin],
          }}
          editor={Editor}
          data={body}
          // onReady={(editor) => {
          //   // You can store the "editor" and use when it is needed.
          //   console.log("Editor is ready to use!", editor);
          // }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setBody(data);
          }}
          // onBlur={(event, editor) => {
          //   console.log("Blur.", editor);
          // }}

          // onFocus={(event, editor) => {
          //   console.log("Focus.", editor);
          // }}
        />
      </div>
    </div>
  );
};

export default MyEditor;
