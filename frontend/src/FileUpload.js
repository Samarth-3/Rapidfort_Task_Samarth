import React, { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [metadata, setMetadata] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setMetadata({
      name: uploadedFile.name,
      size: (uploadedFile.size / 1024).toFixed(2) + " KB",
    });
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8080/docxtopdfdemo",
        formData,
        { responseType: "blob" } // Ensures the response is treated as a file
      );
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "converted_file.pdf";
      link.click();
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  return (
    <div>
      <input type="file" accept=".docx,.doc" onChange={handleFileChange} />
      {metadata && (
        <div>
          <p>File Name: {metadata.name}</p>
          <p>File Size: {metadata.size}</p>
        </div>
      )}
      <button onClick={handleUpload}>Convert to PDF</button>
    </div>
  );
}

export default FileUpload;
