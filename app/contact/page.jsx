"use client";

import React from "react";
import Link from "next/link";
import { FaGlobe, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      description: "Send us an email",
      value: "nullchapter@vitbhopal.ac.in",
      href: "mailto:nullchapter@vitbhopal.ac.in",
      color: "text-blue-400"
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      description: "Follow us on Instagram",
      value: "@nullchapter",
      href: "https://www.instagram.com/null.vitb/",
      color: "text-pink-400"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      description: "Connect with us professionally",
      value: "NULL Chapter VIT Bhopal",
      href: "https://www.linkedin.com/company/null-vit-bhopal-student-chapter/",
      color: "text-blue-400"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      description: "Explore our open source projects",
      value: "nullchapter",
      href: "https://github.com/Null-Student-Chapter-VIT-Bhopal",
      color: "text-gray-300"
    },
    {
      icon: FaGlobe,
      label: "Community Page",
      description: "Visit our chapter page",
      value: "null community",
      href: "https://null.community/chapters/22-vit-bhopal-student-chapter",
      color: "text-green-400"
    }
  ];

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-white-400 max-w-2xl mx-auto font-mono">
            Have questions or want to collaborate? We'd love to hear from you. 
            Reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Link
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${method.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {method.label}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">
                      {method.description}
                    </p>
                    <p className="text-sm font-medium text-gray-300 truncate group-hover:text-blue-400 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Address Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
          <div className="flex items-start space-x-4">
            <div className="text-red-400 flex-shrink-0">
              <FaMapMarkerAlt className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Our Location
              </h3>
              <address className="not-italic text-gray-300 leading-relaxed">
                <strong className="text-white">Vellore Institute of Technology</strong><br />
                Bhopal–Indore Highway, Kothrikalan<br />
                Sehore, Madhya Pradesh – 466114<br />
                India
              </address>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;