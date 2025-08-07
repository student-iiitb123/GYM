import './PagesCss/Contact.css';

export default function Contacts() {
  return (
    <div className="box">
      <div className="contactdetails">
        <h3>Contact Details: </h3>
          <span>Email:</span>
          <p>sanyam.jain@example.com</p>
        
          <span>Phone:</span>
          <p>+91 98765 43210</p>

          <span>Location:</span>
          <p>New Delhi, India</p>

          <span>Support:</span>
          <p>support@yourdomain.com</p>
          <span>Hours:</span>
          <p>Mon–Fri: 9 AM – 6 PM</p>
      </div>

      <div className="register">
        <h3>Register Now</h3>
        
      </div>
    </div>
  );
}
