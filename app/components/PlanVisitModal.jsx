"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function PlanVisitModal({ show, onClose }) {
  const [guests, setGuests] = useState([{ id: 1, email: "", contact: "" }]);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    visit_date: "",
    visit_slot: "",
    instructions: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  // ✅ Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Guest change
  const handleGuestChange = (index, field, value) => {
    const updated = [...guests];
    updated[index][field] = value;
    setGuests(updated);
  };

  // ✅ Add guest
  const addGuest = () => {
    setGuests([...guests, { id: guests.length + 1, email: "", contact: "" }]);
  };

  // ✅ Validation
  const validate = () => {
    let newErrors = {};

    if (!form.first_name) newErrors.first_name = "First name is required";
    if (!form.last_name) newErrors.last_name = "Last name is required";
    if (!form.contact_number)
      newErrors.contact_number = "Contact number is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.visit_date) newErrors.visit_date = "Visit date required";
    if (!form.visit_slot) newErrors.visit_slot = "Select a slot";

    guests.forEach((g, i) => {
      if (!g.email) newErrors[`guest_email_${i}`] = "Email required";
      if (!g.contact) newErrors[`guest_contact_${i}`] = "Contact required";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit
  const handleSubmit = async () => {
    if (!validate()) return;

    const payload = {
      ...form,
      guests: guests.map((g) => ({
        email: g.email,
        contact: g.contact,
      })),
    };

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/plan-visit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Form submitted successfully!");
        onClose();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        {/* LEFT */}
        <div className="modal-left">
          <Image
            src="./images/c1.png"
            alt="Museum"
            fill
            className="modal-img"
          />
          <div className="image-overlay">
            <h2>Plan Your Visit</h2>
            <p>Book your experience in advance</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="modal-right">

          {/* Header */}
          <div className="modal-header">
            <h3>Plan Visit</h3>
            <button className="close-btn" onClick={onClose}>✕</button>
          </div>

          {/* Body */}
          <div className="modal-body">

            <div className="form-grid">
              <div>
                <input name="first_name" placeholder="First Name" onChange={handleChange} />
                {errors.first_name && <p style={{color:"red"}}>{errors.first_name}</p>}
              </div>

              <div>
                <input name="last_name" placeholder="Last Name" onChange={handleChange} />
                {errors.last_name && <p style={{color:"red"}}>{errors.last_name}</p>}
              </div>

              <div>
                <input name="contact_number" placeholder="Contact Number" onChange={handleChange} />
                {errors.contact_number && <p style={{color:"red"}}>{errors.contact_number}</p>}
              </div>

              <div>
                <input name="email" placeholder="Email ID" onChange={handleChange} />
                {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
              </div>
            </div>

            <h4 className="section-title">Guests Details</h4>

            {guests.map((guest, index) => (
              <div className="guest-box" key={guest.id}>
                <div className="guest-header">GUEST {index + 1}</div>

                <div className="form-grid">
                  <div>
                    <input
                      placeholder="Email ID"
                      onChange={(e) =>
                        handleGuestChange(index, "email", e.target.value)
                      }
                    />
                    {errors[`guest_email_${index}`] && (
                      <p style={{color:"red"}}>
                        {errors[`guest_email_${index}`]}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      placeholder="Contact Number"
                      onChange={(e) =>
                        handleGuestChange(index, "contact", e.target.value)
                      }
                    />
                    {errors[`guest_contact_${index}`] && (
                      <p style={{color:"red"}}>
                        {errors[`guest_contact_${index}`]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button className="add-btn" onClick={addGuest}>
              + Add Guest
            </button>

            <div className="form-grid">
              <div>
                <input type="date" name="visit_date" onChange={handleChange} />
                {errors.visit_date && <p style={{color:"red"}}>{errors.visit_date}</p>}
              </div>

              <div>
                <select name="visit_slot" onChange={handleChange}>
                  <option value="">Select Slot</option>
                  <option>10 AM</option>
                  <option>2 PM</option>
                </select>
                {errors.visit_slot && <p style={{color:"red"}}>{errors.visit_slot}</p>}
              </div>
            </div>

            <textarea
              name="instructions"
              placeholder="Additional Instructions"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="close-btn2" onClick={onClose}>
              Close
            </button>
            <button
              className="submit-btn shadow"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
