
import React from 'react';
import './GetMoreUpdates.css';

const GetMoreUpdates = () => {
  // Function to construct the mailto link
  const handleSubscribe = () => {
    const subject = "Newsletter Subscription"; // Subject of the email
    const body = "I would like to subscribe to the newsletter."; // Body of the email
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className="subscription-box">
      <div>
      <h3 className='text-[14px]' >TRY IT NOW...</h3>
      <h1>
        Do you want to get notified<br />
        {/* <span className='gradientText'> </span> */}
        <span className="gradient-text font-bold text-[30px]">Sign up for our newsletter</span>
      </h1>
      <h4>
        Stay updated on the latest components, features, and tools with us.
      </h4>
      </div>
      <form className="subscription-form" onSubmit={(e) => { e.preventDefault(); handleSubscribe(); }}>
      <button type="button" className="subscription-button">Call Us</button>

      <button type="submit" className="additional-button">Email Us</button>
      
      </form>
    </div>
    );
};

export default GetMoreUpdates;
