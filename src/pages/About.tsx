import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="mx-4 lg:mx-0 animate__animated animate__fadeIn">
        <div className="flex flex-col">
          <div className="flex">
            <div className="m-auto block items-center justify-center text-center mt-8 lg:mt-32 max-w-2xl">
              <p className="handwriting mb-8 text-center text-3xl lg:text-6xl ">
                Bismillahirrahmanirrahim
              </p>
              <video
                src="/prewedding/videos/prewedding.mp4"
                controls
                autoPlay
              />
              <p className="mt-8 mb-2">
                Assalamu'alaikum Warahmatullahi Wabarakatuh
              </p>
              <p>
                Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
                menyelenggarakan pernikahan putra-putri kami:
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center my-8">
            <div className="flex flex-col mx-8 max-w-xs justify-center items-center text-center">
              <div>
                <img
                  src="/images/siska.jpg"
                  className="rounded-full"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <p className="handwriting my-4 text-4xl">Yusuf Supriadi</p>
                <p className="text-xl lg:mb-2">Putra ke-2 dari</p>
                <p className="text-sm">Bapak Use</p>
                <p className="text-sm">Ibu Tati (Ema Alit)</p>
              </div>
            </div>
            <div className="flex flex-col mx-8 mt-8 md:mt-0 max-w-xs justify-center items-center text-center">
              <div>
                <img
                  src="/images/denny.jpg"
                  className="rounded-full"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <p className="handwriting my-4 text-4xl">Lusi Haryanti</p>
                <p className="text-xl lg:mb-2">Putri ke-3 dari</p>
                <p className="text-sm">Bapak Yono Suharyono (Abah Ono)</p>
                <p className="text-sm">Ibu Cucu Maemunah</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-5xl mx-auto my-8">
          <hr className="shadow w-full justify-center items-center" />
        </div>
        <div className="flex flex-col justify-center items-center my-8 max-w-4xl mx-auto">
          <p className="handwriting my-8 text-center text-4xl lg:text-6xl ">
            Save the Date
          </p>
          <p className="mb-6 text-center">
            Pernikahan putra-putri kami Insya Allah akan dilaksanakan pada:
          </p>
          <div className="flex flex-col mb-8 p-8 border border-solid border-gray-300 shadow-md rounded-md justify-center text-center">
            <p className="mb-3">Minggu, 09 Juni 2024</p>
            <p>Pukul : 08.00 - Selesai</p>
          </div>
          <p className="text-center my-8 md:my-4 md:max-w-xl lg:max-w-3xl">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
            bapak/ibu/saudara/i berkenan hadir, untuk memberikan doa restu
            kepada putra putri kami
          </p>
        </div>
        <div className="flex max-w-5xl mx-auto my-8">
          <hr className="shadow w-full justify-center items-center" />
        </div>
        <div className="flex flex-col max-w-5xl mx-auto my-8 md:max-w-xl lg:max-w-3xl">
          <blockquote className="text-center">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </blockquote>
          <p className="text-center my-4">QS. Ar-Rum:21</p>
        </div>
        <div className="flex flex-col text-center max-w-5xl mx-auto my-8">
          <p>Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
          <p className="mt-4">Kami yang berbahagia,</p>
          <p>Kel. Bapak Use & Ibu Tati (Ema Alit)</p>
          <p>dan</p>
          <p>Kel. Bapak Yono Suharyono (Abah Ono) & Ibu Cucu Maemunah</p>
          <p className="handwriting my-8 text-center text-4xl lg:text-6xl ">
            Yusuf & Lusi
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
