import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div id="landing">
        <img
          className="w-full h-auto object-cover animate__animated animate__fadeIn"
          src="/images/landing.jpg"
        />
        <div className="bg-white opacity-75 absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex">
            <h1 className="handwriting mb-2 text-center text-4xl lg:text-4xl italic font-bold animate__animated animate__fadeIn">
              The wedding of
            </h1>
          </div>
          <div className="flex mb-8">
            <h2 className="handwriting italic font-bold text-6xl :text-9xl animate__animated animate__fadeIn">
              Yusuf & Lusi
            </h2>
          </div>
          <div className="flex animate__animated animate__fadeIn">
            <h3 className="text-sm lg:text-xl mb-4">Minggu, 09 Juni 2024</h3>
          </div>
          <div className="flex flex-row space-x-8">
            <Link to="/about" target="_self">
              <div className="flex cursor-pointer bg-template-red hover:text-gray-800 hover:bg-transparent border border-solid border-gray-500 shadow rounded-md p-2 px-4 transition-all duration-500 ">
                Lihat Undangan
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
