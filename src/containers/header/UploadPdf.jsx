import React, { useState } from 'react';

const UploadPdf = ({ setVideoUrl }) => {
    const [pdfFile, setPdfFile] = useState(null);

    const handleFileChange = (e) => {
        setPdfFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('pdf_file', pdfFile);

        try {
            const response = await fetch('http://localhost:5000/upload_pdf', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setVideoUrl(data.video_url); // Update the video URL in the parent component
        } catch (error) {
            console.error('Error uploading PDF:', error);
        }
    };

    return (
        <div>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload PDF</button>
        </div>
    );
};

export default UploadPdf;
