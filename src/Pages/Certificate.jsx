import intership from "../Certificate/intership.pdf.jpg";
import SIH from "../Certificate/SIH Cerificate.jpg";
import TFC from "../Certificate/Tushar Fodse  Certification of Participation_page-0001 (1).jpg";

export const Certificate = () => {
  return (
    <section id="certificate" className="min-h-screen py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            My Certificates
          </h1>
          <p className="mt-4 text-lg text-slate-600 font-light">
            Recognitions of achievement and professional growth
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Internship */}
          <div className="bg-white/80 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <h2 className="text-xl font-semibold text-slate-700 px-6 pt-6 mb-4">
              Internship Certificate
            </h2>
            <img
              src={intership}
              alt="Internship Certificate"
              className="w-full h-[380px] object-contain bg-slate-50 p-4 hover:scale-[1.03] transition-transform duration-500 ease-out cursor-zoom-in"
            />
          </div>

          {/* SIH */}
          <div className="bg-white/80 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <h2 className="text-xl font-semibold text-slate-700 px-6 pt-6 mb-4">
              SIH Certificate
            </h2>
            <img
              src={SIH}
              alt="SIH Certificate"
              className="w-full h-[380px] object-contain bg-slate-50 p-4 hover:scale-[1.03] transition-transform duration-500 ease-out cursor-zoom-in"
            />
          </div>

          {/* Bootcamp */}
          <div className="md:col-span-2 bg-white/80 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <h2 className="text-xl font-semibold text-slate-700 px-6 pt-6 mb-4">
              Bootcamp Certificate
            </h2>
            <img
              src={TFC}
              alt="Bootcamp Certificate"
              className="w-full h-[480px] object-contain bg-slate-50 p-6 hover:scale-[1.02] transition-transform duration-500 ease-out cursor-zoom-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
