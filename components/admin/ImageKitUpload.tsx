'use client';

import { IKContext, IKUpload } from 'imagekitio-react';
import { useState, useId } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface ImageKitUploadProps {
    onSuccess: (url: string) => void;
    currentImage?: string;
    label?: string;
}

export default function ImageKitUpload({ onSuccess, currentImage, label = "Cover Image" }: ImageKitUploadProps) {
    const [uploading, setUploading] = useState(false);
    const uniqueId = useId();

    const onError = (err: any) => {
        console.error("ImageKit Upload Error", err);
        setUploading(false);
        alert('Image upload failed. Please try again.');
    };

    const onUploadSuccess = (res: any) => {
        // res.url is the accessible URL
        setUploading(false);
        onSuccess(res.url);
    };

    if (!process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY) {
        return (
            <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm border border-yellow-200">
                ⚠️ ImageKit Public Key is missing. Please restart the server.
            </div>
        );
    }

    const authenticator = async () => {
        try {
            const response = await fetch('/api/imagekit/auth');
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Request failed with status ${response.status}: ${errorText}`);
            }
            const data = await response.json();
            const { signature, expire, token } = data;
            return { signature, expire, token };
        } catch (error: any) {
            console.error('ImageKit Auth Failed:', error);
            throw new Error(`Authentication request failed: ${error.message}`);
        }
    };

    const [isDragging, setIsDragging] = useState(false);

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const onDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            const input = document.getElementById(`file-upload-${uniqueId}`) as HTMLInputElement;
            if (input) {
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                input.files = dataTransfer.files;
                const event = new Event('change', { bubbles: true });
                input.dispatchEvent(event);
            }
        }
    };

    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>

            <IKContext
                publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY}
                urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                authenticator={authenticator}
            >
                <div className="space-y-4">
                    {(currentImage || uploading) && (
                        <div className="relative w-full md:w-1/2 aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                            {uploading ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 bg-opacity-75 z-10">
                                    <LoadingSpinner size="md" color="teal" />
                                    <span className="text-xs text-gray-500 mt-2">Uploading...</span>
                                </div>
                            ) : null}

                            {currentImage && (
                                <img
                                    src={currentImage}
                                    alt="Preview"
                                    className={`w-full h-full object-cover transition-opacity ${uploading ? 'opacity-50' : 'opacity-100'}`}
                                />
                            )}
                        </div>
                    )}

                    <IKUpload
                        fileName="blog-cover"
                        onError={onError}
                        onSuccess={onUploadSuccess}
                        onUploadStart={() => setUploading(true)}
                        validateFile={(file: any) => file.size < 5000000} // Max 5MB
                        style={{ display: 'none' }} // Custom button trigger
                        id={`file-upload-${uniqueId}`}
                    />
                    
                    <div 
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                        className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition-colors ${
                            isDragging ? 'border-[#1a7f7a] bg-teal-50' : 'border-gray-300 bg-white hover:border-gray-400'
                        } ${uploading ? 'pointer-events-none opacity-50' : ''}`}
                    >
                        <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex text-sm text-gray-600 justify-center">
                                <label
                                    htmlFor={`file-upload-${uniqueId}`}
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-[#1a7f7a] hover:text-teal-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#1a7f7a]"
                                >
                                    <span>Upload a file</span>
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                                PNG, JPG, WEBP up to 5MB
                            </p>
                        </div>
                    </div>
                </div>
            </IKContext>
        </div>
    );
}
