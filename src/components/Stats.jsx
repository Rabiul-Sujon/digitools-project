const Stats = () => {
  return (
    <div className="bg-[#7C3AED] w-full py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-around text-white">
        
        {/* Active Users */}
        <div className="text-center flex-1">
          <h2 className="text-5xl font-bold mb-2">50K+</h2>
          <p className="text-purple-100 text-lg">Active Users</p>
        </div>

        {/* Vertical Divider 1 */}
        <div className="hidden md:block w-[2px] h-16 bg-purple-400 opacity-50"></div>

        {/* Premium Tools */}
        <div className="text-center flex-1 my-8 md:my-0">
          <h2 className="text-5xl font-bold mb-2">200+</h2>
          <p className="text-purple-100 text-lg">Premium Tools</p>
        </div>

        {/* Vertical Divider 2 */}
        <div className="hidden md:block w-[2px] h-16 bg-purple-400 opacity-50"></div>

        {/* Rating */}
        <div className="text-center flex-1">
          <h2 className="text-5xl font-bold mb-2">4.9</h2>
          <p className="text-purple-100 text-lg">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;