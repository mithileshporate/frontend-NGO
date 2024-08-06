import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import './Donate.css'; 

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
 const baseurl="https://backend-ngo-3.onrender.com";
  const handleDonate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseurl}/api/v1/donate`,
        { name, email, phone, amount, message },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Clear the form fields
      setName("");
      setEmail("");
      setPhone("");
      setAmount("");
      setMessage("");

      // Show success toast
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 3000,
      });

      // Redirect after showing toast
      setTimeout(() => {
        window.location.href = "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=5358024";
      }, 3000); // Adjust the delay to match the toast duration

    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.message || 'Failed to initiate donation';
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <section className="donate">
      <div className="container">
        <div className="banner">
          <img src="/Untitled.png" alt="Logo" className="logo" />
          <form onSubmit={handleDonate}>
            <div>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                value={phone}
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="number"
                value={amount}
                placeholder="Donation Amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <textarea
              rows="5"
              value={message}
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn" type="submit">
              Donate
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Donate;




