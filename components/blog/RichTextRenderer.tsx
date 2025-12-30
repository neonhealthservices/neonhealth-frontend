'use client';

import { IBlog } from '@/types/blog';

interface RichTextRendererProps {
    content: string;
}

export default function RichTextRenderer({ content }: RichTextRendererProps) {
    // In a real app, we should sanitize this content using dompurify or similar
    // In a real app, we should sanitize this content using dompurify or similar
    return (
        <div className="rich-text-container">
            <style jsx global>{`
                .rich-text-container {
                    color: #000000;
                    font-size: 1.125rem;
                    line-height: 1.6;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                    word-break: normal;
                    white-space: normal;
                    text-align: left;
                }
                .rich-text-container h1, 
                .rich-text-container h2, 
                .rich-text-container h3, 
                .rich-text-container h4 {
                    color: black;
                    font-weight: 700;
                    margin-top: 2em;
                    margin-bottom: 0.75em;
                    line-height: 1.3;
                }
                .rich-text-container h1 { font-size: 2.25em; }
                .rich-text-container h2 { font-size: 1.75em; }
                .rich-text-container h3 { font-size: 1.5em; }
                
                .rich-text-container p {
                    margin-bottom: 1.25em;
                }
                
                .rich-text-container ul {
                    list-style-type: disc;
                    padding-left: 1.625em;
                    margin-bottom: 1.25em;
                }
                
                .rich-text-container ol {
                    list-style-type: decimal;
                    padding-left: 1.625em;
                    margin-bottom: 1.25em;
                }
                
                .rich-text-container li {
                    margin-bottom: 0.5em;
                    padding-left: 0.375em;
                }
                
                .rich-text-container li::marker {
                    color: #1a7f7a;
                }
                
                .rich-text-container a {
                    color: #1a7f7a;
                    text-decoration: none;
                    border-bottom: 1px solid transparent;
                    transition: border-color 0.2s;
                }
                
                .rich-text-container a:hover {
                    border-color: #1a7f7a;
                }
                
                .rich-text-container blockquote {
                    border-left: 4px solid #1a7f7a;
                    background-color: #ECF9F7;
                    padding: 1rem 1.5rem;
                    color: #4b5563;
                    font-style: italic;
                    margin: 1.5rem 0;
                    border-radius: 0 0.5rem 0.5rem 0;
                }
                
                .rich-text-container img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 0.75rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    margin: 2rem auto;
                    display: block;
                }
                
                .rich-text-container strong {
                    color: black;
                    font-weight: 700;
                }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
