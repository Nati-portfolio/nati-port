const ProgressCounter = () => {
  return (
    <div className="fixed w-screen h-[110vh] inset-0 z-50 loader-wrap">
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        fill="#21DD723"
        className="h-[110%] md:h-full w-full svgBox"
        style={{ willChange: "auto" }}
      >
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="overflow-hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <p className="nameText text-center font-sans z-0 text-white inline-flex items-center mb-8">
            <span
              className="text-4xl letterN md:text-7xl h-max font-bold progress"
              style={{ willChange: "transform" }}
            >
              N
            </span>
            <span
              className="text-4xl letterZ md:text-7xl h-max font-bold progress"
              style={{ willChange: "transform" }}
            >
              E
            </span>
          </p>
        </div>        {/* Loading Animation */}
        <div
          className="loading-container opacity-0"
          style={{ willChange: "opacity" }}
        >
          <div className="w-16 md:w-24 h-0.5 bg-white/20 rounded-full overflow-hidden">
            <div className="loading-progress h-full bg-white rounded-full origin-left scale-x-0" style={{ willChange: "transform" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCounter;