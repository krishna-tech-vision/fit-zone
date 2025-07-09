import gym from "../assets/gym.jpg";
// import img from "../assets/gym.jpeg";

function Herosection() {

    return(
        <div className="w-full h-80 md:h-130 relative shadow-sm shadow-gray-700">
           <img src={gym} className="w-full h-full brightness-75" />
           <div className="absolute bottom-5 left-5 md:bottom-10">
            <h1 className="bg-gray-800 text-gray-100 inline-block mb-2">“Train Hard, Stay Fit”</h1>
           <h2 className="text-gray-50 font-bold text-xl md:text-3xl "><strong>Best Gyms & Fitness Centres In Bhubanesware</strong></h2>
           </div>
        </div>
    );
}

export default Herosection;