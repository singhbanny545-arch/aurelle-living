const footerLinks = {
  Explore: [
    { label: 'Home', href: '#home' },
    { label: 'Collections', href: '#collections' },
    { label: 'Furniture', href: '#products' },
    { label: 'Our Story', href: '#story' },
  ],
  Information: [
    { label: 'Contact', href: 'mailto:hello@aurelleliving.com' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Shipping & Returns', href: '/shipping' },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            AURELLE
          </a>
          <p>
            Considered furniture.
            <br />
            Timeless living.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div className="footer-column" key={heading}>
            <h3>{heading}</h3>
            <nav aria-label={`${heading} links`}>
              {links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="copyright">
        <span>
          © {new Date().getFullYear()} AURELLE LIVING.
          All rights reserved.
        </span>
        <span>Designed for considered living.</span>
      </div>
    </footer>
  );
}
