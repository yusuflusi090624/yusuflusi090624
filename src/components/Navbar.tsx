import { Link } from "react-router-dom";

export default function DesktopNavbar() {
  return (
    <nav className="bg-white shadow fixed w-full hidden lg:flex z-50">
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-around h-16">
          <div className="flex flex-grow">
            <p>#YusufLusiUntukSelamanya</p>
          </div>
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link to="/">
                  <a className="text-gray-500 hover:bg-template-red hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500">
                    Home
                  </a>
                </Link>
                <Link to="/about">
                  <a className="text-gray-500 hover:bg-template-red hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500">
                    Invitation
                  </a>
                </Link>
                <Link to="/gallery">
                  <a className="text-gray-500 hover:bg-template-red hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500">
                    Gallery
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
