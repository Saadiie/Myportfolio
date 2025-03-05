"use client"

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <h1 className="page-header text-center">Contact Me</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            Let's connect and discuss how we can work together
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="page-subheader">Get In Touch</h2>
              <p className="text-gray-700 mb-8">Feel free to reach out for any inquiries.</p>
              <div className="space-y-6">
                <ContactItem icon={<Mail className="w-5 h-5" />} title="Email" content="rajpootsaad491@gmail.com" href="mailto:rajpootsaad491@gmail.com" />
                <ContactItem icon={<Phone className="w-5 h-5" />} title="Phone" content="+92 309 438 3896" href="tel:+921234567890" />
                <ContactItem icon={<FaWhatsapp className="w-5 h-5" />} title="Whatsapp" content="Chat Us"href="https://api.whatsapp.com/send/?phone=923094383896&text&type=phone_number&app_absent=0" />
                <ContactItem icon={<MapPin className="w-5 h-5" />} title="Location" content="Gujrat, Pakistan" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon, title, content, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-secondary p-3 rounded-full text-primary">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        {href ? <a href={href} className="text-gray-700 hover:text-primary">{content}</a> : <p className="text-gray-700">{content}</p>}
      </div>
    </div>
  );
}

function InputField({ label, id, type, value, handleChange }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input type={type} id={id} name={id} value={value} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
    </div>
  );
}

function TextareaField({ label, id, value, handleChange }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea id={id} name={id} value={value} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"></textarea>
    </div>
  );
}