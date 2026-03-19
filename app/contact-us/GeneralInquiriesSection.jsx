"use client";

export default function GeneralInquiriesSection() {
  return (
    <section className="inquiry-section">
      <div className="inquiry-container">
        {/* Header */}
        <span className="inquiry-eyebrow">HAVE A QUESTION?</span>

        <h2 className="inquiry-title">GENERAL INQUIRIES</h2>

        <p className="inquiry-description">
          Thank you for visiting us. We invite you to
          share any questions, comments, or concerns you may have using the form
          below. We will follow up with you as soon as we can.
        </p>

        {/* Form */}
        <form className="inquiry-form">
          <div className="form-row">
            <div className="form-group">
              <label>FIRST NAME</label>
              <input type="text" placeholder="First Name" />
            </div>

            <div className="form-group">
              <label>LAST NAME</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input type="email" placeholder="example@email.com" />
            </div>

            <div className="form-group">
              <label>PHONE NUMBER</label>
              <input type="tel" placeholder="717-555-1234" />
            </div>
          </div>

          <div className="form-group full">
            <label>MESSAGE</label>
            <textarea rows={4} placeholder="Example Text" />
          </div>

          <button type="submit" className="submit-btn">
            SUBMIT FORM
          </button>
        </form>
      </div>
    </section>
  );
}
