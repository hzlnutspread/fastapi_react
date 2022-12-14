import React, { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:8000/uploadfile";

const FileInput = () => {
  const [file, setFile] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log(file);

    try {
      axios
        .post(baseURL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => console.log(res.data.filename));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <div>
        <button type="submit">SEND</button>
      </div>
    </form>
  );
};

export default FileInput;
