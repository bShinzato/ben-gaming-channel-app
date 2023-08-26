import React from 'react'

const Home = () => {
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 w-auto h-auto min-w-full min-h-full z-0 object-cover">
  <source src="videos/video-1.mp4" type="video/mp4" />
</video>
        
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl text-center">Welcome to Ben Army</h1>
          <p className="text-lg text-center pt-5">HE'S ONE SHOT mf has 120 hp left</p>
        </div>
      </div>
    </>
  );
}

export default Home;
