import React from 'react';

function Footer() {
  return (
    <footer className="bottom-0 fixed bg-gray-300 shadow-md z-50 w-full px-5 py-2 flex items-center">
      <a className="mr-4" href="https://www.kaiostech.com/terms-of-service/">Terms of Service</a>
      <a className="mr-4" href="https://www.kaiostech.com/privacy-policy/">Privacy Policy</a>
      <a className="mr-4" href="https://www.kaiostech.com/sub-agreement/">Submission Agreement</a>
      <span className="copy">All right reserved © KaiOS 2018 - 2020.</span>
    </footer>
  )
}

export default Footer;
