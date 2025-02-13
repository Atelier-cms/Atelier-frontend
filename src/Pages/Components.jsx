// import CompCard from "../Components/Compcard";
import Footer from "../Components/Footer";
import Grid from "../Components/Grid";
function Components() {
  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col items-center">
      {/* tagline */}
      <div className="h-min lg:w-[85%] border border-gray-400 flex flex-col mt-20 rounded-3xl mx-5 p-5">
        <h4 className="mt-4 text-5xl text-slate-300">MORE THAN A</h4>
        <h1 className="mt-4 text-5xl font-bold text-sky-200">DESIGN</h1>
        <p className="mt-3 lg:w-2/5 text-gray-300">
          Our agency is a dynamic fusion of innovation and expertise, committed to crafting visual experiences that leave an incredible mark.
        </p>
      </div>

      {/* CompCards */}
      <div className="flex mt-10 gap-4 flex-wrap justify-center flex-col lg:flex-row ">
        <CompCard title="3D Eyes" image={EyeImage} buttonText="Check it out" />
        <CompCard title="Zig-Zag Grid Line" image={ZigZagImg} buttonText="Check it out" />
        <CompCard title="Marque" image={MarqueImg} buttonText="Check it out" />
        <CompCard title="Gradient Backgroud" image={EyeImage} buttonText="Check it out" />
      </div>


      <div className="mt-20 w-full">
        <Footer/>
      </div>
    </div>
  );
}

export default Components;
