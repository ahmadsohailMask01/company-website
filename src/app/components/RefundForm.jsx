import React, { useState } from "react";

export default function RefundForm() {
  const [formData, setFormData] = useState({
    applicantName: "",
    applicantCNIC: "",
    applicantEmail: "",
    fatherName: "",
    fatherCNIC: "",
    contactNumber: "",
    bankName: "",
    accountTitle: "",
    iban: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual submit logic
    console.log("Form Submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-6 bg-white rounded-2xl shadow-md space-y-8"
    >
      {/* Applicant Information */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-blue-700">
          Applicant Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-between gap-2">
            <label htmlFor="">Department</label>
            <input
              type="text"
              name="applicantName"
              placeholder="Department"
              value={formData.applicantName}
              onChange={handleChange}
              className="p-3 border rounded-md w-[70%]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="">Degree</label>
            <input
              type="text"
              name="applicantName"
              placeholder="Degree"
              value={formData.applicantName}
              onChange={handleChange}
              className="p-3 border rounded-md w-[70%]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="">Applicant / Reg. No.</label>
            <input
              type="text"
              name="applicantName"
              placeholder="Applicant / Reg. No."
              value={formData.applicantName}
              onChange={handleChange}
              className="p-3 border rounded-md w-[70%]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="">Applicant Name</label>
            <input
              type="text"
              name="applicantName"
              placeholder="Full Name"
              value={formData.applicantName}
              onChange={handleChange}
              className="p-3 border rounded-md w-[70%]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="">Applicant CNIC</label>
            <input
              type="text"
              name="applicantCNIC"
              placeholder="CNIC (xxxxx-xxxxxxx-x)"
              value={formData.applicantCNIC}
              onChange={handleChange}
              className="p-3 border rounded-md w-[70%]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="">Compaign</label>
            <input
              type="text"
              name="applicantName"
              placeholder="Compaign"
              value={formData.applicantName}
              onChange={handleChange}
              className="p-3 border rounded-md w-[70%]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="">Contact No.</label>
            <input
              type="text"
              name="applicantName"
              placeholder="Contact No."
              value={formData.applicantName}
              onChange={handleChange}
              className="p-3 border rounded-md w-[70%]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="">Email</label>
          <input
            type="email"
            name="applicantEmail"
            placeholder="Email Address"
            value={formData.applicantEmail}
            onChange={handleChange}
            className="p-3 border rounded-md w-[70%]"
          />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="">Current Address</label>
            <input
              type="text"
              name="applicantName"
              placeholder="Current Address"
              value={formData.applicantName}
              onChange={handleChange}
              className="p-3 border rounded-md w-[70%]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="">Permanent Address</label>
            <input
              type="text"
              name="applicantName"
              placeholder="Permanent Address"
              value={formData.applicantName}
              onChange={handleChange}
              className="p-3 border rounded-md w-[70%]"
            />
          </div>
        </div>
      </section>

      {/* Father/Guardian Information */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-blue-700">
          Father/Guardian Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fatherName"
            placeholder="Father/Guardian Name"
            value={formData.fatherName}
            onChange={handleChange}
            className="p-3 border rounded-md w-[70%]"
          />
          <input
            type="text"
            name="fatherCNIC"
            placeholder="Father/Guardian CNIC"
            value={formData.fatherCNIC}
            onChange={handleChange}
            className="p-3 border rounded-md w-[70%]"
          />
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="p-3 border rounded-md w-[70%]"
          />
        </div>
      </section>

      {/* Bank Information */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-blue-700">
          Bank Information (IBAN is compulsory)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="bankName"
            placeholder="Bank Name"
            value={formData.bankName}
            onChange={handleChange}
            className="p-3 border rounded-md w-[70%]"
          />
          <input
            type="text"
            name="accountTitle"
            placeholder="Account Title"
            value={formData.accountTitle}
            onChange={handleChange}
            className="p-3 border rounded-md w-[70%]"
          />
          <input
            type="text"
            name="iban"
            placeholder="IBAN (Required)"
            value={formData.iban}
            onChange={handleChange}
            required
            className="p-3 border rounded-md md:col-span-2 w-[70%]"
          />
        </div>
      </section>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Submit Fee Refund Request
      </button>
    </form>
  );
}
