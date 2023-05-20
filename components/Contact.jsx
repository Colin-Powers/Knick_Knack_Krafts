import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  {
    /* Email contact form functions*/
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_92jt5hd",
        "template_j7ja2lg",
        form.current,
        "GmgGThQKMWDj6BXmO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert(
      `Thank you for reaching out, I will get back to you as soon as I can!`
    );
    e.target.reset();
  };
  {
    /* Email contact form functions end */
  }

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#008B8B] flex justify-center p-4 pt-60"
    >
      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#ffcba4] text-[#fff]">
            Contact
          </p>
          <p className="text-2xl text-[#fff] py-3">
            For inquiries concerning custom orders, please reach out via the
            form below.
          </p>
        </div>
        <input
          className="bg-[#fff] p-2 rounded-full outline-none placeholder-[#000] opacity-70 focus:opacity-100"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#fff] rounded-full outline-none placeholder-[#000] opacity-70 focus:opacity-100"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#fff] p-2 outline-none placeholder-[#000] opacity-70 focus:opacity-100 rounded-md"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          value="Send"
          className="text-[#fff] border-2 hover:bg-[#ffcba4] hover:border-[#ffcba4] px-4 py-3 my-8 mx-auto flex items-center"
        >
          Send
        </button>
      </form>
      {/* Contact Form End */}
    </div>
  );
};

export default Contact;
