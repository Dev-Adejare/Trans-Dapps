import React from "react";

const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-column items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> Accross The World
          </h1>
          <p>
            Explore the crypto world
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
