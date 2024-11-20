import "../style/contact.css";


function Contact() {
  return (
    <main className="cont-main">
      <div className="form-continer">
        <h1 className="cont-title">Contact Us</h1>
        <form action="" className="form-container">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your Email" />
          <input className="msg" type="text" placeholder="Enter your message" />
        </form>
        <button className="btn-smbit">Submit</button>
      </div>
    </main>
  );
}
export default Contact;
