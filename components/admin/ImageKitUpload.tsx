'use client';

import { IKContext, IKUpload } from 'imagekitio-react';
import { useState } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface ImageKitUploadProps {
    onSuccess: (url: string) => void;
    currentImage?: string;
    label?: string;
}

export default function ImageKitUpload({ onSuccess, currentImage, label = "Cover Image" }: ImageKitUploadProps) {
    const [uploading, setUploading] = useState(false);

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
                        id="file-upload"
                    />
                    <label
                        htmlFor="file-upload"
                        className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a7f7a] cursor-pointer ${uploading ? 'pointer-events-none opacity-50' : ''}`}
                    >
                        <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {currentImage ? 'Change Image' : 'Upload Image'}
                    </label>
                    <span className="ml-3 text-xs text-gray-500">JPG, PNG, WEBP (Max 5MB)</span>
                </div>
            </IKContext>
        </div>
    );
}
