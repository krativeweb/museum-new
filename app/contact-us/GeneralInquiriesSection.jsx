"use client";

import { useState } from "react";

export default function GeneralInquiriesSection() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // remove error on typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  /* ================= VALIDATION ================= */

  const validate = () => {
    const newErrors = {};

    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    setLoading(true);

    try {
      const formPayload = new FormData();
      formPayload.append("first_name", formData.first_name);
      formPayload.append("last_name", formData.last_name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("message", formData.message);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          body: formPayload,
        },
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Submission failed");
      }

      setSuccess("Form submitted successfully ✅");

      // reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  /* ================= JSX ================= */

  return (
    <section className="inquiry-section">
      <div className="inquiry-container">
        <span className="inquiry-eyebrow">HAVE A QUESTION?</span>

        <h2 className="inquiry-title">GENERAL INQUIRIES</h2>

        <p className="inquiry-description">
          Thank you for visiting us. We invite you to share any questions,
          comments, or concerns you may have using the form below.
        </p>

        {/* SUCCESS MESSAGE */}
        {success && <p className="success-msg">{success}</p>}

        {/* FORM */}
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>FIRST NAME</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
              />
              {errors.first_name && (
                <span className="error">{errors.first_name}</span>
              )}
            </div>

            <div className="form-group">
              <label>LAST NAME</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
              />
              {errors.last_name && (
                <span className="error">{errors.last_name}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>PHONE NUMBER</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="717-555-1234"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-group full">
            <label>MESSAGE</label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Example Text"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "SUBMIT FORM"}
          </button>
        </form>
      </div>
    </section>
  );
}
