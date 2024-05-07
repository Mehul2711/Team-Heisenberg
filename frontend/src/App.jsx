import React, { useState, useEffect } from "react";
import "./app.css";
import { motion } from "framer-motion";
import medical from "../public/medical-hero-image.jpg";

function App() {
  const [diagnosis, setDiagnosis] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false); // Initialize modal state
  const [selectedFile, setSelectedFile] = useState(null); // Store the selected file
  const [currentPage, setCurrentPage] = useState("home"); // State to track current page

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

  const handleFileChange = (event) => {
    // Update the selected file state
    setSelectedFile(event.target.files[0]);
  };

  const handleRemoveImage = () => {
    // Reset the selected file state
    setSelectedFile(null);
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      {isLoading ? (
        <div>
          {currentPage === "home" && (
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
                {/* Display selected image if available */}
                {selectedFile && (
                  <>
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected Image"
                      className="w-1/3 rounded-lg"
                    />
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                      onClick={handleRemoveImage}
                    >
                      Remove Image
                    </button>
                  </>
                )}
              </div>
              {/* Input for selecting a file */}
              <div className="flex justify-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-4 "
                />
              </div>
              <div className="flex flex-cols gap-10 justify-center text-2xl">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => navigateToPage("chat")}
                >
                  About Project
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => navigateToPage("about")}
                >
                  Team Details
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => navigateToPage("team")}
                >
                  team
                </button>
              </div>
            </div>
          )}
          {currentPage === "chat" && (
            <div>
              {/* Chat component */}
              <div id="webchat" />
              <h2 className="text-center text-2xl">About Us</h2>
              <p className="text-justify m-24 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi
                nisl, sodales eu tempus ac, bibendum in nunc. Aliquam sit amet
                efficitur elit. Aenean quis fringilla diam. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Morbi accumsan enim volutpat diam aliquet, at
                scelerisque libero tempus. Vivamus lobortis, mauris at molestie
                pellentesque, nibh dolor volutpat velit, eget mattis orci orci
                ut diam. In hac habitasse platea dictumst. Ut quis magna in erat
                mollis egestas eget a ligula. Ut efficitur eros non dui iaculis,
                non sodales lorem luctus. Nam cursus a ligula vitae pulvinar.
                Fusce sed tellus luctus, sollicitudin arcu vel, convallis nunc.
                Proin sit amet purus nec justo condimentum congue eu ut neque.
                Nulla et malesuada dui, vel cursus massa. Aenean finibus
                accumsan porta. Aliquam non consectetur dui. Nam porta magna nec
                metus pulvinar, eget bibendum magna accumsan. Aenean vitae
                bibendum neque. Ut quis felis in nibh laoreet luctus. Duis
                ultrices et mauris lobortis ultrices. Donec elementum lectus
                libero, non accumsan nisi mattis et. Donec in vulputate lorem.
                In dui nisl, congue ut orci in, ultrices fermentum mi. In
                aliquam fermentum efficitur. Maecenas varius porta orci at
                sollicitudin. Praesent ac facilisis sapien. Maecenas vestibulum
                rutrum eleifend. Curabitur erat est, ultrices quis consequat
                non, hendrerit quis purus. Integer tortor justo, faucibus id
                ligula sit amet, semper commodo tellus. Donec sit amet fringilla
                nulla, vel viverra magna. Fusce efficitur velit eu lorem
                volutpat, quis fringilla diam fermentum. Ut gravida vel ex vitae
                posuere. Cras vitae suscipit elit. Proin venenatis dictum est, a
                aliquet est suscipit quis. Nulla finibus erat dolor, a porta
                tellus tincidunt ac. Integer vitae ipsum vel ante sollicitudin
                luctus. Donec et lobortis nunc. Pellentesque facilisis dui arcu,
                quis ornare nulla elementum non. Vivamus in porttitor lacus.
                Vestibulum rhoncus lorem vitae nibh fringilla condimentum.
                Quisque in lectus lacus. Duis vehicula consequat efficitur.
                Mauris pellentesque consectetur neque id hendrerit. Suspendisse
                congue consectetur tortor sed facilisis. Mauris gravida tempus
                urna, quis ultricies urna placerat sed. Phasellus dictum
                fringilla justo, ac tempor turpis. Phasellus pellentesque, risus
                eget venenatis malesuada, quam nulla molestie risus, et mollis
                felis augue quis urna. Morbi ac pellentesque mi. Morbi laoreet
                mattis pulvinar. Donec in erat vitae quam varius sodales.
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => navigateToPage("home")}
                >
                  Back
                </button>
              </div>
            </div>
          )}
          {currentPage === "about" && (
            <div>
              <h2 className="text-center text-2xl">About Us</h2>
              <p className="text-justify m-24 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi
                nisl, sodales eu tempus ac, bibendum in nunc. Aliquam sit amet
                efficitur elit. Aenean quis fringilla diam. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Morbi accumsan enim volutpat diam aliquet, at
                scelerisque libero tempus. Vivamus lobortis, mauris at molestie
                pellentesque, nibh dolor volutpat velit, eget mattis orci orci
                ut diam. In hac habitasse platea dictumst. Ut quis magna in erat
                mollis egestas eget a ligula. Ut efficitur eros non dui iaculis,
                non sodales lorem luctus. Nam cursus a ligula vitae pulvinar.
                Fusce sed tellus luctus, sollicitudin arcu vel, convallis nunc.
                Proin sit amet purus nec justo condimentum congue eu ut neque.
                Nulla et malesuada dui, vel cursus massa. Aenean finibus
                accumsan porta. Aliquam non consectetur dui. Nam porta magna nec
                metus pulvinar, eget bibendum magna accumsan. Aenean vitae
                bibendum neque. Ut quis felis in nibh laoreet luctus. Duis
                ultrices et mauris lobortis ultrices. Donec elementum lectus
                libero, non accumsan nisi mattis et. Donec in vulputate lorem.
                In dui nisl, congue ut orci in, ultrices fermentum mi. In
                aliquam fermentum efficitur. Maecenas varius porta orci at
                sollicitudin. Praesent ac facilisis sapien. Maecenas vestibulum
                rutrum eleifend. Curabitur erat est, ultrices quis consequat
                non, hendrerit quis purus. Integer tortor justo, faucibus id
                ligula sit amet, semper commodo tellus. Donec sit amet fringilla
                nulla, vel viverra magna. Fusce efficitur velit eu lorem
                volutpat, quis fringilla diam fermentum. Ut gravida vel ex vitae
                posuere. Cras vitae suscipit elit. Proin venenatis dictum est, a
                aliquet est suscipit quis. Nulla finibus erat dolor, a porta
                tellus tincidunt ac. Integer vitae ipsum vel ante sollicitudin
                luctus. Donec et lobortis nunc. Pellentesque facilisis dui arcu,
                quis ornare nulla elementum non. Vivamus in porttitor lacus.
                Vestibulum rhoncus lorem vitae nibh fringilla condimentum.
                Quisque in lectus lacus. Duis vehicula consequat efficitur.
                Mauris pellentesque consectetur neque id hendrerit. Suspendisse
                congue consectetur tortor sed facilisis. Mauris gravida tempus
                urna, quis ultricies urna placerat sed. Phasellus dictum
                fringilla justo, ac tempor turpis. Phasellus pellentesque, risus
                eget venenatis malesuada, quam nulla molestie risus, et mollis
                felis augue quis urna. Morbi ac pellentesque mi. Morbi laoreet
                mattis pulvinar. Donec in erat vitae quam varius sodales.
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => navigateToPage("home")}
                >
                  Back
                </button>
              </div>
            </div>
          )}
          {currentPage === "team" && (
            <div>
              <h2 className="text-center text-2xl">About Us</h2>
              <p className="text-justify m-24 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi
                nisl, sodales eu tempus ac, bibendum in nunc. Aliquam sit amet
                efficitur elit. Aenean quis fringilla diam. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Morbi accumsan enim volutpat diam aliquet, at
                scelerisque libero tempus. Vivamus lobortis, mauris at molestie
                pellentesque, nibh dolor volutpat velit, eget mattis orci orci
                ut diam. In hac habitasse platea dictumst. Ut quis magna in erat
                mollis egestas eget a ligula. Ut efficitur eros non dui iaculis,
                non sodales lorem luctus. Nam cursus a ligula vitae pulvinar.
                Fusce sed tellus luctus, sollicitudin arcu vel, convallis nunc.
                Proin sit amet purus nec justo condimentum congue eu ut neque.
                Nulla et malesuada dui, vel cursus massa. Aenean finibus
                accumsan porta. Aliquam non consectetur dui. Nam porta magna nec
                metus pulvinar, eget bibendum magna accumsan. Aenean vitae
                bibendum neque. Ut quis felis in nibh laoreet luctus. Duis
                ultrices et mauris lobortis ultrices. Donec elementum lectus
                libero, non accumsan nisi mattis et. Donec in vulputate lorem.
                In dui nisl, congue ut orci in, ultrices fermentum mi. In
                aliquam fermentum efficitur. Maecenas varius porta orci at
                sollicitudin. Praesent ac facilisis sapien. Maecenas vestibulum
                rutrum eleifend. Curabitur erat est, ultrices quis consequat
                non, hendrerit quis purus. Integer tortor justo, faucibus id
                ligula sit amet, semper commodo tellus. Donec sit amet fringilla
                nulla, vel viverra magna. Fusce efficitur velit eu lorem
                volutpat, quis fringilla diam fermentum. Ut gravida vel ex vitae
                posuere. Cras vitae suscipit elit. Proin venenatis dictum est, a
                aliquet est suscipit quis. Nulla finibus erat dolor, a porta
                tellus tincidunt ac. Integer vitae ipsum vel ante sollicitudin
                luctus. Donec et lobortis nunc. Pellentesque facilisis dui arcu,
                quis ornare nulla elementum non. Vivamus in porttitor lacus.
                Vestibulum rhoncus lorem vitae nibh fringilla condimentum.
                Quisque in lectus lacus. Duis vehicula consequat efficitur.
                Mauris pellentesque consectetur neque id hendrerit. Suspendisse
                congue consectetur tortor sed facilisis. Mauris gravida tempus
                urna, quis ultricies urna placerat sed. Phasellus dictum
                fringilla justo, ac tempor turpis. Phasellus pellentesque, risus
                eget venenatis malesuada, quam nulla molestie risus, et mollis
                felis augue quis urna. Morbi ac pellentesque mi. Morbi laoreet
                mattis pulvinar. Donec in erat vitae quam varius sodales.
              </p>
              <div className="flex justify-center">
                <button
                  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => navigateToPage("home")}
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Botpress Chatbot */}
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script
        src="https://mediafiles.botpress.cloud/dbc0f391-0a8f-42a2-a1e1-0ce070b63e87/webchat/config.js"
        defer
      ></script>
    </div>
  );
}

export default App;
