import React from "react";

// Replace these with your own icon URLs
const socialIcons = [
  { name: "Instagram", src: "../instagram.png", link: "https://instagram.com" },
  { name: "WhatsApp", src: "../whatsapp.png", link: "https://wa.me/your-number" },
  { name: "Google Ads", src: "../adwords.png", link: "https://ads.google.com" },
  { name: "ManyChat", src: "../manychat.png", link: "https://manychat.com" },
  { name: "Facebook", src: "../facebook.png", link: "https://facebook.com" },
  { name: "YouTube", src: "../youtube.png", link: "https://youtube.com" },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6 flex-wrap py-10">
      {socialIcons.map((icon, idx) => (
        <a
          key={idx}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg p-4 transition hover:shadow-md hover:scale-105"
        >
          <img src={icon.src} alt={icon.name} className="w-10 h-10 object-contain" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
