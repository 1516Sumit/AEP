import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import MyNavbar from '../MyNavbar';
import Topper from '../Topper';

function PdfFiles() {
    const pdfFiles = [
        '/pdfs/AEP_Engineering_2022_eng.pdf',
        '/pdfs/AEP_Engineering_pulsed drying technology.eng (1).pdf',
        '/pdfs/AEPT at Malta Summit.pdf',
        '/pdfs/AEPT PLASTIC WASTE TO ENERGY- ALL OPTIONS.pdf',
        '/pdfs/AEPT Pure Technologies for Pure Nature.pdf',
        '/pdfs/AEPT- Photos for Website.pdf',
        // '/pdfs/AEPT- AEPT- Website Photos.pdf',
        '/pdfs/LEST_T0_en.pdf',
        '/pdfs/PULSAR BIO Manure to Energy plant.pdf',
        '/pdfs/Andrey IPPIN incubator certif.pdf',
    ];

    return (
        <>
            <Topper />
            <MyNavbar />
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <section className="flex flex-row flex-wrap justify-center items-center p-4 gap-4">
                    {pdfFiles.map((fileUrl, index) => (
                        <a
                            key={index}
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-80 overflow-hidden border rounded shadow block"
                        >
                            <div className="w-full">
                                <Viewer fileUrl={fileUrl} />
                            </div>
                        </a>
                    ))}
                </section>
            </Worker>
        </>
    );
}

export default PdfFiles;
