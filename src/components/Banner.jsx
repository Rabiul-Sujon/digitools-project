import bannerImg from '../assets/banner.png'
import playIcon from '../assets/Play.png';

     const Banner = () => {
  return (
     <main className="pt-32 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
    
    {/* Left Side: Content */}
    <div className="flex-1 text-center lg:text-left">
      
      {/* 1. Animated Badge */}
      <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-purple-100 shadow-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600"></span>
        </span>
        New: AI-Powered Tools Available
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
        Supercharge Your <br /> 
        <span className="text-purple-600">Digital Workflow</span>
      </h1>
      
      <p className="mt-8 text-lg text-slate-500 max-w-xl leading-relaxed">
        Access premium AI tools, design assets, templates, and productivity 
        software—all in one place. Start creating faster today.
      </p>
      
      {/* 2. Buttons Section */}
      <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5">
        <button className="btn bg-purple-600 hover:bg-purple-700 text-white border-none px-10 rounded-full h-14 text-lg shadow-lg shadow-purple-200 transition-all">
          Explore Products
        </button>

        <button className="btn btn-outline border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-600 px-10 rounded-full h-14 text-lg group flex items-center gap-2">
          <img 
            src={playIcon} 
            alt="Play" 
            className="w-6 h-6 object-contain transition-transform group-hover:scale-110" 
          />
          Watch Demo
        </button>
      </div>
    </div>

    {/* Right Side: Image */}
    <div className="flex-1 w-full max-w-[620px]">
      <div className="relative">
        {/* Soft purple glow behind the image */}
        <div className="absolute -inset-4 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        <img 
          src={bannerImg} 
          alt="Banner Illustration" 
          className="relative w-full h-auto rounded-[40px] drop-shadow-2xl"
        />
      </div>
    </div>

  </div>
</main>
  )
}

export default Banner;