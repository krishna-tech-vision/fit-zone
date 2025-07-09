function ContentSection() {
  return (
    <section className="p-2 mt-5 w-full">
      <div className="p-2 sm:p-2 shadow-md shadow-gray-400 rounded-md">
        <h2><strong>About Us:</strong></h2>
        <p className="text-sm mt-2 sm:text-md">
          Welcome to FitZone, Bhubaneswar’s most affordable and energetic local
          gym. Whether you're a beginner or a fitness freak, FitZone provides
          the right environment to help you reach your fitness goals. Our
          experienced trainers and clean, motivating space make fitness
          accessible to everyone.
        </p>
        <h2 className="mt-1"><strong>Our Mission:</strong></h2>
        <p className="text-sm mt-2 sm:text-md">
          “Train Hard, Stay Fit, Be Strong.”
          We believe fitness should be part of your lifestyle, not just a trend.
        </p>
      </div>
 
      {/* Membership plans content */}
      <div className="mt-5">
        <h2 className="text-center text-lg"><strong>Membership Plans</strong></h2>
        <div className="flex flex-col sm:flex-row justify-around items-center mt-3 gap-2">
            <div className="p-1 shadow-md shadow-gray-400 rounded-md flex flex-col w-full sm:w-65">
                <h2 className="text-lg font-semibold">Basic</h2>
                <p>₹499/month</p>
                <span>Gym Access Only</span>
                <button className="bg-blue-500 rounded-md text-gray-200 w-40 self-center m-2">Buy Now</button>
            </div>
            <div className="p-1 shadow-md shadow-gray-400 rounded-md flex flex-col w-full sm:w-65">
                <h2 className="text-lg font-semibold">Standard</h2>
                <p>₹799/month</p>
                <span>Gym + Trainer Guidance</span>
                <button className="bg-blue-500 rounded-md text-gray-200 w-40 self-center m-2">Buy Now</button>
            </div>
            <div className="p-1 shadow-md shadow-gray-400 rounded-md flex flex-col w-full sm:w-65">
                <h2 className="text-lg font-semibold">Pro</h2>
                <p>₹1,199/month</p>
                <span className="text-sm">Full Access + Trainer + Diet Chart</span>
                <button className="bg-blue-500 rounded-md text-gray-200 w-40 self-center m-2">Buy Now</button>
            </div>
        </div>
      </div>
 
      {/* Opening Hours Details */}
      <div className="p-3">
           <h1 className="text-lg font-bold mt-3">Opening hours:</h1>
           <table className="w-full mt-3">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Timing</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td>Monday</td>
                        <td>6 AM - 10 PM</td>
                    </tr>
                    <tr className="text-center">
                        <td>Tuesday</td>
                        <td>6 AM - 10 PM</td>
                    </tr>
                    <tr className="text-center">
                        <td>Wednessday</td>
                        <td>6 AM - 10 PM</td>
                    </tr>
                    <tr className="text-center">
                        <td>Thusday</td>
                        <td>6 AM - 10 PM</td>
                    </tr>
                    <tr className="text-center">
                        <td>Friday</td>
                        <td>6 AM - 10 PM</td>
                    </tr>
                    <tr className="text-center">
                        <td>Saturday</td>
                        <td>6 AM - 9 PM</td>
                    </tr>
                    <tr className="text-center">
                        <td>Sunday</td>
                        <td>6 AM - 12 PM</td>
                    </tr>
                </tbody>
           </table>
      </div>
    </section>
  );
}

export default ContentSection;
