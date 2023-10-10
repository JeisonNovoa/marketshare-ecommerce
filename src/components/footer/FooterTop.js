import React from "react";

const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="w-full border-t-[1px] border-b-[1px] py-8">
        <div className="w-64 mx-auto text-center font-titleFont">
          <p className="text-sm">See personalized recommendations</p>
          <button className="w-full bg-[#2121fa] rounded-md py-1 font-semibold cursor-pointer hover:bg-[#2121fad3] active:bg-[#2121fabc]">
            Sign In
          </button>
          <p className="text-xs mt-1">
            New Customber?{" "}
            <span className="text-blue-600 ml-1 cursor-pointer">
              Strat here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
