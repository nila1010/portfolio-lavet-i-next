import React from "react";
import Button from "./Button";

function Contact() {
  return (
    <section className="mb-20">
      <h2 className="font-bold text-5xl lg:text-7xl mb-10">Kontakt</h2>
      <div>
        <div className="flex gap-8 mb-4 items-center">
          <img className="h-12 w-12" src="/logo/phone.svg" alt="Phone logo" />
          <p className="text-xl font-semibold">31 25 58 28</p>
        </div>
        <div className="flex gap-8 mb-8 items-center">
          <img className="w-12 h-12" src="/logo/mail.svg" alt="E-mail logo" />
          <a className="text-xl font-semibold" href="mailto:nicolai@langkilde.dk">
            Nicolai@langkilde.dk
          </a>
        </div>
      </div>
      <Button linkPath="/cv2024.pdf">Se CV</Button>
    </section>
  );
}

export default Contact;
