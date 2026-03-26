"use client";
import { CldUploadWidget } from 'next-cloudinary';

export default function ImageUpload({ onUploadSuccess }) {
  return (
    <CldUploadWidget 
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      onSuccess={(result) => {
        // Jab upload ho jaye, toh image ka URL ya Public ID mil jayegi
        onUploadSuccess(result.info.secure_url);
        console.log("Upload Success:", result.info.public_id);
      }}
    >
      {({ open }) => {
        return (
          <button 
            onClick={() => open()}
            className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
          >
            Upload Photo
          </button>
        );
      }}
    </CldUploadWidget>
  );
}