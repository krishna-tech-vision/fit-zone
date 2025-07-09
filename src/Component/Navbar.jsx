

function Navbar() {

    return(
        <nav className="p-1 flex justify-between bg-gray-800 items-center">
           <h2 className="cursor-pointer text-lg p-1 sm:text-xl font-bold font-serif sm:p-2 text-gray-100">FitZone</h2>
           <header className="flex gap-3 text-sm sm:text-lg text-gray-200 ml-1 sm:mr-10">
            <a className="hover:bg-gray-900 rounded-md p-1 sm:p-2" href="#">Home</a>
            <a className="hover:bg-gray-900 rounded-md p-1 sm:p-2" href="#">About</a>
            <a className="hover:bg-gray-900 rounded-md p-1 sm:p-2" href="#">Contact us</a>
           </header>
        </nav>
    );
}

export default Navbar;
