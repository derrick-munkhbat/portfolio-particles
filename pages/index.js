import ParticlesBackground from "@/src/components/ParticlesBackground";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <div className="absolute content min-w-full flex flex-col h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory lg:max-lg:w-96 mx-auto">
        {/* <Header /> */}
        <div className="snap-start flex w-full h-44 border-y-2 justify-evenly gap-6 px-8 py-4 items-center">
          <div className="text-white text-2xl font-bold text-center">
            ALPHA TRIANGLE
          </div>

          {/* <MainMenu items={menuItems} /> */}
          <div className="hidden lg:flex w-full justify-evenly font-bold text-white text-2xl">
            <h1>WELCOME</h1>
            <h1>WHO WE ARE</h1>
            <h1>WHAT WE DO</h1>
            <h1>EXPERIENCE</h1>
            <h1>TEAM</h1>
            <h1>what</h1>
          </div>
        </div>

        {/* image */}
        <div className="lg:flex w-full h-full justify-center items-center opacity-40">
          <img
            className="w-full h-full"
            src="/images/office.jpeg"
            alt="profile-portrait"
          />
        </div>
      </div>
    </>
  );
}
