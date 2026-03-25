'use client';
import dynamic from 'next/dynamic';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Document = dynamic(() => import('react-pdf').then((m) => m.Document), { ssr: false });
const Page = dynamic(() => import('react-pdf').then((m) => m.Page), { ssr: false });

const Resume = () => {
  return (
    <Document file="/BenJuan_Resume.pdf">
      <Page pageNumber={1} />
    </Document>
  );
};

export default Resume;
