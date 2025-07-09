import Navbar from "./Component/Navbar";
import Herosection from "./Component/Herosection"
import ContentSection from "./Component/ContentSection";
import Footer from "./Component/Footer";

function App() {

  return(
    <div className="w-full bg-gray-200">
       <Navbar />
       <Herosection />
       <ContentSection />
       <Footer />
    </div>
  );
}

export default App;