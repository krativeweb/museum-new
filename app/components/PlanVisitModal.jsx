"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function PlanVisitModal({ show, onClose }) {
  const [guests, setGuests] = useState([{ id: 1 }]);

  if (!show) return null;

  const addGuest = () => {
    setGuests([...guests, { id: guests.length + 1 }]);
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
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
              <input placeholder="Contact Number" />
              <input placeholder="Email ID" />
            </div>

            <h4 className="section-title">Guests Details</h4>

            {guests.map((guest, index) => (
              <div className="guest-box" key={guest.id}>
                <div className="guest-header">GUEST {index + 1}</div>

                <div className="form-grid">
                  <input placeholder="Email ID" />
                  <input placeholder="Contact Number" />
                </div>
              </div>
            ))}

            <button className="add-btn" onClick={addGuest}>
              + Add Guest
            </button>

            <div className="form-grid">
              <input type="date" />
              <select>
                <option>Select Slot</option>
                <option>10 AM</option>
                <option>2 PM</option>
              </select>
            </div>

            <textarea placeholder="Additional Instructions"></textarea>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="close-btn2" onClick={onClose}>
              Close
            </button>
            <button className="submit-btn shadow">
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}