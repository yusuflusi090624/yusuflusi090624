import { IoIosHome, IoIosCalendar } from "react-icons/io";
import { GiDiamondRing } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  return (
    <section
      id="bottom-navigation"
      className="lg:hidden block fixed inset-x-0 bottom-0 z-50 bg-white shadow"
    >
      <div id="tabs" className="flex justify-between px-10">
        <Link to="/">
          <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <IoIosHome className="mx-auto m-1 sm:mx-auto sm:m-2" />
            <span className="tab tab-home block text-xs">Home</span>
          </a>
        </Link>
        <Link to="/about">
          <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <IoIosCalendar className="mx-auto m-1 sm:mx-auto sm:m-2" />
            <span className="tab tab-kategori block text-xs">Invitation</span>
          </a>
        </Link>
        <a href="/prewedding">
          <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <GiDiamondRing className="mx-auto m-1 sm:mx-auto sm:m-2" />
            <span className="tab tab-kategori block text-xs">Gallery</span>
          </a>
        </a>
      </div>
    </section>
  );
}
