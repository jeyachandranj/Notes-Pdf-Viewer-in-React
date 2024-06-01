import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "../PdfComp";
import "./show.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function App() {
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);
  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/get-files");
    console.log(result.data.data);
    const deepLearningFiles = result.data.data.filter(
      (data) => data.category === "DL"
    );
    setAllImage(deepLearningFiles);
  };

  
  const showPdf = (pdf) => {
    setPdfFile(`http://localhost:5000/files/${pdf}`)
  };
  return (
    <div className="App">
      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data) => {
                return (
                  <div className="inner-div">
                    <h6>Title: {data.title}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
      <PdfComp pdfFile={pdfFile}/>
    </div>
  );
}

export default App;
