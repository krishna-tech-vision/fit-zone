function Footer() {
  return (
    <>
      <footer className="w-full h-60 bg-gray-700 flex p-2 sm:flex-row flex-col gap-5">
        <h1 className="text-lg text-gray-100 font-bold">📞 Contact info:</h1>
        <ul className="text-gray-200">
          <li>Adress: 2nd Floor, Market Complex, Rasulgarh, Bhubaneswar – 751010</li>
          <li>Phone: +91 98765 43210</li>
          <li>Email: fitzone.bbsr@gmail.com</li>
          <span className="text-gray-900 font-bold text-xl mt-3 mr-3 cursor-pointer"><i class="fa-brands fa-x-twitter"></i></span>
          <span className="text-gray-900 font-bold text-xl mt-3 mr-3 cursor-pointer"><i class="fa-brands fa-instagram"></i></span>
          <span className="text-gray-900 font-bold text-xl mt-3 mr-3 cursor-pointer"><i class="fa-brands fa-facebook"></i></span>
        </ul>
      </footer>
      <div className="w-full bg-gray-800 h-10 flex justify-center items-center text-gray-200 text-sm sm:text-lg">
        Bhubaneswar – 751010; fitzone.munda@gmail.com
      </div>
    </>
  );
}

export default Footer;
