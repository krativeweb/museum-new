import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop"
export const metadata = {
  title: "About Us",
  description: "Enriching our community through history",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <ScrollToTop/>
      {/* HERO SECTION (your first section) */}
      <section className="about-wrapper">
        <div className="about-left-bg"></div>

        <div className="about-right-bg">
          <img
            src="../images/nine.png"
            alt="Historic interior with garden view"
          />
        </div>

        <header className="about-center-content">
          <span className="about-tag">ABOUT US</span>
          <h1 className="about-title">
            Celebrating 75-years<br />
            <span> of the Republic’s Heartbeat</span>
          </h1>
        </header>

        <section className="about-mission">
          <p>
           “Today, for the first time in a long and chequered history, we find the whole
            of this vast land, from Kashmir in the north to Cape Comorin in the south,
            from Kathiawad and Cutch in the west to Cocanada and Kamrup in the
            east, brought together under the jurisdiction of one Constitution and one
            Union which has taken upon itself the responsibility of the welfare of more
            than 320 million men and women who inhabit it,” <br />
            <em>-Dr. Rajendra Prasad, Inaugural Republic Day Address, 26 January 1950</em>
          </p>
        </section>
      </section>

      {/* SECOND SECTION – NORMAL VERTICAL SCROLL */}
      <section className="about-second refined">
  {/* LEFT IMAGE AREA */}
  <div className="about-second-left">
    <div className="about-image-frame">
      <img
        src="../images/naveen-jindal.jpg"
        alt="18th century decorative textile"
      />
    </div>
  </div>

  {/* RIGHT TEXT AREA */}
  <div className="about-second-right">
    <div className="about-second-content">
      <h2>
        Leadership Notes
      </h2>

      <h4>A Note From the Chancellor’s Desk</h4>

      <p>
       The Constitution of India stands as a living testament to the resilience of
our nation and as a powerful symbol of unity of the people of India. As we
celebrate the 75th anniversary of the adoption of the Constitution of India on
26 November 2024, we aim to memorialise the grandeur and glory of
the Constitution for perpetuity through the establishment of India’s
first Constitution Museum and the Rights and Freedoms Academy at
JGU campus.

      </p>
      <p>We dedicate this museum to every individual who has contributed to the
freedom of our nation, including the 300 extraordinary members of the
Constituent Assembly whose farsightedness created the Constitution of
India. We hope that as you enter the halls of the Constitution Museum,
you will feel the legacy of unity, freedom, and resilience that binds us
as a nation, like the pride we feel when unfurling the Tiranga or turning
the pages of the Constitution.
</p>
PROFESSOR MR. NAVEEN JINDAL <br />
FOUNDING CHANCELLOR <br />
O.P. Jindal Global University

    </div>
  </div>
</section>
<section className="editorial-nav">
  {/* ROW 1 */}
  <div className="editorial-row row-1">
    <span className="editorial-kicker">NARRATED VIDEO TOURS</span>
    <h2 className="editorial-heading">VIRTUAL TOUR</h2>

    <div className="editorial-image img-right">
      <img src="../images/one.jpg" alt="Virtual tour" />
    </div>
    <div className="editorial-arrow">
    <span>→</span>
  </div>
  </div>

  <div className="editorial-line" />

  {/* ROW 2 */}
  <div className="editorial-row row-2">
    <span className="editorial-kicker center">DIVE INTO THE PAST</span>
    <h2 className="editorial-heading center">MUSEUM HISTORY</h2>

    <div className="editorial-image img-left">
      <img src="../images/six.jpg" alt="Museum history" />
    </div>
     <div className="editorial-arrow">
    <span>→</span>
  </div>
  </div>

  <div className="editorial-line" />

  {/* ROW 3 */}
  <div className="editorial-row row-3">
    <span className="editorial-kicker right">EXPERIENCE THE MUSEUM</span>
    <h2 className="editorial-heading right">PLAN A VISIT</h2>

    <div className="editorial-image img-right">
      <img src="../images/two.jpg" alt="Plan visit" />
    </div>

    <div className="editorial-image img-bottom">
      <img src="../images/c1.png" alt="Interior room" />
    </div>
     <div className="editorial-arrow">
    <span>→</span>
  </div>
  </div>
</section>

<section className="future-section">
  {/* MANUSCRIPT /images */}
  <img
    src="https://cdn.prod.website-files.com/6570e8a05181277af39c19d5/657b4abc25d1ecaea536be0c_Greeble%202-p-1080.png "
    alt="Historic manuscript"
    className="manuscript manuscript-top"
  />

  <img
    src="https://cdn.prod.website-files.com/6570e8a05181277af39c19d5/6594632cacf84e2f702228e4_image%209.png"
    alt="Historic manuscript"
    className="manuscript manuscript-bottom"
  />

  {/* CONTENT */}
  <div className="future-content-wrap">
    <h2 className="future-title">
      Introduction To The 
 <br />
      <em>Three Immersive </em> Galleries
    </h2>

    <div className="future-text">
      <p>
       Step into a realm where India's foundational document springs to life, commemorating 75 years since its adoption on November 26, 1949. This immersive space at O.P. Jindal Global University honours the Constitution as a living testament to unity, justice, liberty, equality, and fraternity, crafted through the vision of 300 extraordinary Constituent Assembly members.

      </p>
    </div>
  </div>

  {/* CENTER DIVIDER */}
  <span className="future-divider"></span>
</section>

<section className="education-section">
  {/* LEFT VISUAL */}
  <div className="education-visual">
    {/* COLOR BACKGROUNDS */}
    <div className="education-bg bg-rust"></div>
    <div className="education-bg bg-paper"></div>
    <div className="education-bg bg-weave"></div>

    {/* FOREGROUND IMAGE */}
    <div className="education-foreground-image">
      <img
        src="../images/c2.png"
        alt="Historic interior"
      />
    </div>
  </div>

  {/* RIGHT CONTENT */}
  <div className="education-content">
    <div className="education-text">
      <h2>
       Constitution: 
<br />
       A Kaleidoscope
      </h2>

      <p>
        The gallery explores key provisions of the Constitution through different sections. The Constitution's design allows it to address India's diversity while protecting liberty and equality. As visitors move through the space, they encounter the foundational ideas that shape the nation's legal and political framework. The exhibition demonstrates how constitutional principles balance unity with diversity, ensuring representation for all communities. The gallery ultimately reveals how the Constitution serves as a living document, responsive to the needs of a dynamic society while remaining anchored in its core democratic values. 
      </p>
    </div>
  </div>
</section>
<section className="cottage-section">
  {/* MANUSCRIPT IMAGE */}
  <img
    src="https://cdn.prod.website-files.com/6570e8a05181277af39c19d5/6594632cacf84e2f702228e4_image%209.png"
    alt="Historic manuscript"
    className="cottage-manuscript"
  />

  <div className="cottage-inner">
    {/* LEFT TEXT */}
    <div className="cottage-text">
      <h2>The Makers Gallery</h2>

      <p>
       The Maker's Gallery illuminates the Constitution's arduous journey from conception to adoption. Each clause was tempered through rigorous debate and deliberation. Through archival treasures, Constituent Assembly proceedings, speeches, newspaper clippings, and rare audio-visual recordings, visitors witness these foundational discussions unfold. The gallery reveals the aspirations, tensions, and convictions that shape democratic India, preserving each session as a vital step in the nation's constitutional awakening.
      </p>
    </div>

    {/* RIGHT VISUAL */}
    <div className="cottage-visual">
      {/* COLOR BACKGROUNDS */}
      <div className="cottage-bg bg-green"></div>
      <div className="cottage-bg bg-pattern"></div>

      {/* FOREGROUND IMAGE */}
      <div className="cottage-image">
        <img
          src="../images/c1.png"
          alt="The Cottage building"
        />
      </div>
    </div>
  </div>
</section>
<section className="library-section">
  {/* MANUSCRIPT */}
  <img
    src="https://cdn.prod.website-files.com/6570e8a05181277af39c19d5/6594632cacf84e2f702228e4_image%209.png"
    alt="Historic manuscript"
    className="library-manuscript"
  />

  <div className="library-inner">
    {/* LEFT VISUAL */}
    <div className="library-visual">
      <div className="library-bg"></div>
      <div className="library-bgtwo"></div>

      <div className="library-image">
        <img
          src="../images/two.png"
          alt="The Library interior"
        />
      </div>
    </div>

    {/* RIGHT TEXT */}
    <div className="library-text">
      <h2>Freedoms Journey</h2>

      <p>
        Freedom's Journey traces how Indians embraced the constitutional transition and the fundamental rights that defined their citizenship. Through immersive audio-visual experiences, this gallery cultivates rights consciousness by capturing the essence of these freedoms and their evolution over time, including landmark struggles like Naveen Jindal's fight for flag rights, which ultimately shaped how we honour our National Flag today through precise standards that preserve its dignity.

      </p>
    </div>
  </div>
</section>

<section className="staff-section">
  <div className="staff-header">
    <span className="staff-line"></span>
    <h2>BOARD OF ADVISORS</h2>
  </div>

  <div className="staff-grid">
    <div className="staff-item">
      <h3>Mr. Naveen Jindal</h3>
      <p>Chancellor, O.P. Jindal Global University</p>
      <span className="staff-divider"></span>
      <p>Patron</p>
    </div>

    <div className="staff-item">
      <h3>Professor (Dr.) C. Raj Kumar</h3>
      <p>Vice Chancellor, O.P. Jindal Global University</p>
      <span className="staff-divider"></span>
      <p>Chairperson</p>
    </div>

    <div className="staff-item">
      <h3>Professor Dabiru Sridhar Patnaik</h3>
      <p>Registrar, O.P. Jindal Global University</p>
      <span className="staff-divider"></span>
      <p>Member Secretary</p>
    </div>
  </div>
</section>

<section className="contact-cta">
  <div className="contact-overlay"></div>

  <div className="contact-content">
    <span className="contact-kicker">Want To Know More?
</span>

    <h2>
      Get In Touch With <br />
      Our Staff Member
    </h2>

    <a href="/contact" className="contact-btn">
      CONTACT US NOW
      <span className="contact-arrow">→</span>
    </a>
  </div>
</section>
<Footer/>




    </main>
  );
}
