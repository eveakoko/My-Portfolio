const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Full stack</p>
          <p>|</p>
          <p>Developer</p>
        </div>
  
        <div className="flex gap-3">
            <a href="https://github.com/eveakoko" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/eve-nicole-akoko-94497b301?trk=contact-info" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/assets/linkedin.svg" alt="instagram" className="w-1/2 h-1/2 cursor-pointer" />
            </a>
        </div>

  
        <p className="text-white-500">© 2024 Eve Nicole Akoko. All rights reserved.</p>
      </footer>
    );
  };
  
export default Footer;
