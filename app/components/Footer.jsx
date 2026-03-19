export default function Footer() {
  return (
    <footer className="site-footer">
      {/* TOP */}
      <div className="footer-top">
        {/* LOGO */}
        <div className="footer-brand">
          <div className="logo">
            <img src="../images/logo.webp" alt="logo" className="img-fluid" style={{width:"70%", height:"25vh",}} />
          </div>
        </div>

        {/* ADDRESS */}
        <div className="footer-col">
          <strong>Address</strong>
          <p>
            Ratan Jindal Block <br />
O. P. Jindal Global University <br />
Sonipat, Haryana - 131001
          </p>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <strong>Contact us</strong>
          <p>
            <a href="tel:17176844325">+91 740 444 3255 →</a>
            <br />
            <a href="mailto:info@wrightsferryMuseum.org">
              Email us →
            </a>
          </p>
        </div>

        {/* LINKS 1 */}
        <div className="footer-col">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/history">History</a></li>
            <li><a href="/collection">Collection</a></li>
            <li><a href="/tour-policies">Tour Policies</a></li>
          </ul>
        </div>

        {/* LINKS 2 */}
        <div className="footer-col">
          <ul>
            <li><a href="/virtual-tour">Virtual Tour</a></li>
            <li><a href="/visit">Plan a Visit</a></li>
            <li><a href="/shop">Book Shop</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        {/* <div className="footer-social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">◎</a>
        </div> */}
      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 Copyright
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
