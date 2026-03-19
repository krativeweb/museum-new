export default function DirectionsSection() {
  return (
    <section className="directions-section">
      {/* decorative manuscript */}
      <div className="manuscript-bg" />

      <div className="directions-inner">
        {/* LEFT CONTENT */}
        <div className="directions-content">
          <span className="directions-eyebrow">DIRECTIONS</span>

          <h2 className="directions-title">
            Getting <em>to</em><br />
            The Constitution Museum
          </h2>

          <p className="directions-text">
           The Constitution Museum is conveniently located at O. P. Jindal Global University in Sonipat, Haryana, with easy access from major roads connecting the Delhi–NCR region.
          </p>

          <button className="directions-btn">
            DRIVING DIRECTIONS <span>→</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="directions-image-wrap">
          <img
            src="https://cdn.prod.website-files.com/6570e8a05181277af39c19d5/65cd1de265653c8178b2cfe5_Group%20556.jpg"   /* your map image */
            alt="Map"
            className="directions-image"
          />
        </div>
      </div>
    </section>
  );
}
