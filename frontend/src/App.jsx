import "./app.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      {/* <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 100,
        }}
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 2, repeat: Infinity }}
      > */}
      <div>
        <h1 className="text-[100px] text-blue-600   flex justify-center items-center ">
          Team Heisenberg
        </h1>
      </div>
      {/* </motion.div> */}
    </div>
  );
}

export default App;
