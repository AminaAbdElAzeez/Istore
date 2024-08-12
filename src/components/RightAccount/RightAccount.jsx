import { useState } from "react";
import "./RightAccount.css";

function RightAccount() {
  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel1111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // استخدم name بدلاً من id
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (
      formData.newPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form Data Submitted:", formData);

      setFormData({
        ...formData,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      alert("Validation failed");
    }
  };

  return (
    <div className="right-account">
      <form className="right-account-form" onSubmit={handleSubmit}>
        <h4 className="right-account-form-title">Edit Your Profile</h4>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Md"
              name="firstName" // استخدم name هنا
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="error-accout">{errors.firstName}</p>
            )}
          </div>
          <div className="col-lg-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Rimel"
              name="lastName" // استخدم name هنا
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="error-accout">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="rimel1111@gmail.com"
              name="email" // استخدم name هنا
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-accout">{errors.email}</p>}
          </div>
          <div className="col-lg-6">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="Kingston, 5236, United State"
              name="address" // استخدم name هنا
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <label htmlFor="currentPassword">Password Changes</label>
            <input
              type="password"
              placeholder="Current Password"
              name="currentPassword" // استخدم name هنا
              value={formData.currentPassword}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="New Password"
              name="newPassword" // استخدم name هنا
              value={formData.newPassword}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              name="confirmPassword" // استخدم name هنا
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="error-accout">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
        <input
          type="reset"
          value="Cancel"
          onClick={() =>
            setFormData({
              ...formData,
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            })
          }
        />
        <input type="submit" value="Save Changes" />
      </form>
    </div>
  );
}

export default RightAccount;
