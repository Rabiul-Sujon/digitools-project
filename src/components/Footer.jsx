

// SVG Resource > https://v0.lucide.dev
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#0B1221] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="max-w-sm">
            <h2 className="text-4xl font-bold mb-6">DigiTools</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links Columns Container */}
          <div className="flex flex-wrap gap-16 md:gap-24">
            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-6">Product</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Pricing</li>
                <li className="hover:text-white cursor-pointer">Templates</li>
                <li className="hover:text-white cursor-pointer">Integrations</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Press</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer">Documentation</li>
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">Community</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-6">Social Links</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1221] hover:bg-slate-200 cursor-pointer transition-all">
                  <InstagramIcon />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1221] hover:bg-slate-200 cursor-pointer transition-all">
                  <FacebookIcon />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1221] hover:bg-slate-200 cursor-pointer transition-all">
                  <XIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>&copy; 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;