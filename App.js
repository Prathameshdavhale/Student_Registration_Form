import React, { useState } from "react";
import "./App.css";

export default function RegistrationForm() {
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherText, setOtherText] = useState("");
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1); // 1 to 31

  const years = Array.from({ length: 60 }, (_, i) => 2025 - i);

  // ----------- SUBMIT HANDLER -----------
  const handleSubmit = (e) => {
    e.preventDefault();

    // If "Other" is checked but no text entered
    if (showOtherInput && otherText.trim() === "") {
      alert("❌ Please specify the 'Other' activity.");
      return;
    }

    // SUCCESS
    alert("✔ Successfully Submitted!");

    e.target.reset();
    setShowOtherInput(false);
    setOtherText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="main-wrapper">
        <div className="main-container">
          <div className="form-box">

            {/* Page Title */}
            <h1 className="title">Student Registration Form</h1>
            <h4>Masters program 2024-2025</h4>

            {/* ---------------- BASIC INFORMATION ---------------- */}
            <div className="section-box">
              <h2 className="section-title">Basic Information</h2>

              <div className="three-grid">
                <div>
                  <label className="label">First Name</label>
                  <input className="input" />
                </div>
                <div>
                  <label className="label">Middle Name</label>
                  <input className="input" />
                </div>
                <div>
                  <label className="label">Last Name</label>
                  <input className="input" />
                </div>
              </div>

              <div className="two-grid">
                <div>
                  <label className="label">PRN Number</label>
                  <input className="input" placeholder="e.g., 11183021" />
                </div>

                <div>
                  <label className="label">Gender</label>
                  <select className="input">
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="two-grid">
                <div>
                  <label className="label">Qualification</label>
                  <select className="input">
                    <option>Select</option>
                    <option>B.Sc</option>
                    <option>BCA</option>
                    <option>BBA</option>
                    <option>B.Com</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="label">Specialization</label>
                  <input className="input" />
                </div>
              </div>

              <div className="two-grid">
                <div>
                  <label className="label">Phone Number</label>
                  <input className="input" placeholder="(000) 000-0000" />
                </div>

                <div>
                  <label className="label">State</label>
                  <select className="input">
                    <option>Select</option>
                    <option>Maharashtra</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="three-grid">
                <div>
                  <label className="label">Birth Month</label>
                  <select className="input">
                    <option value="">Select Month</option>
                    {months.map((month) => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">Birth Day</label>
                  <select className="input">
                    <option value="">Select Day</option>
                    {days.map((day) => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                </div>

                {/* --- Birth Year --- */}
                <div>
                  <label className="label">Birth Year</label>
                  <select className="input">
                    <option value="">Select Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* ---------------- ACADEMIC BACKGROUND ---------------- */}
          <div className="section-box">
            <h2 className="section-title">Academic Background</h2>

            <div className="two-grid">
              <div>
                <label className="label">College Name</label>
                <input className="input" />
              </div>

              <div>
                <label className="label">Academic Year</label>
                <input className="input" placeholder="e.g. 2012-2015" />
              </div>
            </div>

            <div>
              <label className="label">Previous Year Marksheet</label>
              <input type="file" className="input-file" />
            </div>

            <div>
              <label className="label">Other Extra Curricular Activities</label>
              <input className="input" />
            </div>

            <div>
              <label className="label">Hobbies</label>

              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input type="checkbox" /> Drawing
                </label>

                <label className="checkbox-item">
                  <input type="checkbox" /> Singing
                </label>

                <label className="checkbox-item">
                  <input type="checkbox" /> Swimming
                </label>

                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    onChange={(e) => setShowOtherInput(e.target.checked)}
                  />
                  Other
                </label>
              </div>

              {showOtherInput && (
                <input
                  className="input other-input"
                  placeholder="Please specify..."
                  value={otherText}
                  onChange={(e) => setOtherText(e.target.value)}
                />
              )}
            </div>

          </div>

          {/* ---------------- SUBMIT BUTTON ---------------- */}
          <div className="submit-wrapper">
            <button type="submit" className="submit-btn">Submit Form</button>
          </div>

        </div>
      </div>
    </form >
  );
}
