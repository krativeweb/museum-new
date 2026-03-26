import Footer from "../components/Footer";
import InteractiveMap from "../components/InteractiveMap";

export default function Home() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="about-wrapper">
        <div className="map-left-bg"></div>

        <div className="about-right-bg">
          <img
            src="../images/map-hero.jpg"
            alt="Historic interior with garden view"
          />
        </div>

        <header className="about-center-content">
          <span className="about-tag text-white ">ABOUT US</span>
          <h1 className="about-title text-white">
            Find Your Way to the Republic’s Living Legacy<br />
            <span></span>
          </h1>
        </header>

        <section className="about-mission">
          <p>
            "Nestled within O.P. Jindal Global University, the Constitution Museum stands as a space where history, law, and citizenship converge.
            Step into the journey that shaped a nation.”
            <br />
            {/* <em>-Dr. Rajendra Prasad, Inaugural Republic Day Address, 26 January 1950</em> */}
          </p>
        </section>
      </section>

      <InteractiveMap />

      <Footer />


    </>
  );
}