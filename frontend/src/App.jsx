import React, { useState, useEffect } from "react";
import "./app.css";
import { motion } from "framer-motion";

function App() {
  const [diagnosis, setDiagnosis] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the llm model
        const llmData = await fetchLLMData();

        // Fetch data from the ocr model
        const ocrData = await fetchOCRData();

        // Summarize the features of the llm and ocr models
        const summarizedFeatures = summarizeFeatures(llmData, ocrData);

        // Set the diagnosis state with the summarized features
        setDiagnosis(summarizedFeatures);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchLLMData = async () => {
    const response = await fetch("/api/llm");
    const data = await response.json();
    return data;
  };

  const fetchOCRData = async () => {
    const response = await fetch("/api/ocr");
    const data = await response.json();
    return data;
  };

  const summarizeFeatures = (llmData, ocrData) => {
    // Summarize the features of the llm and ocr models
    // Return the summarized features as a string
    return "Summarized features";
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="text-5xl text-blue-600 text-center mb-8">
            Team Heisenberg
          </h1>
          <div className="text-xl text-center mb-8">
            <p>{diagnosis}</p>
            <p>
              If you have any questions, feel free to ask our chatbot for
              immediate assistance.
            </p>
          </div>
          <div className="flex justify-center space-x-8">
            <img
              src="path/to/image1.jpg"
              alt="Image 1"
              className="w-1/3 rounded-lg"
            />
            <img
              src="path/to/image2.jpg"
              alt="Image 2"
              className="w-1/3 rounded-lg"
            />
          </div>
        </div>
      )}
      {/* Botpress Chatbot */}
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script src="https://mediafiles.botpress.cloud/dbc0f391-0a8f-42a2-a1e1-0ce070b63e87/webchat/config.js" defer></script>
    </div>
  );
}

export default App;
