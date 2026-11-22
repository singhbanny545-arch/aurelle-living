import { useState } from 'react';

interface SiteHeaderProps {
  cartCount: number;
}

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Furniture', href: '#products' },
  { label: 'Our Story', href: '#story' },
];

export default function SiteHeader({ cartCount }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <button
        className="menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        ☰
      </button>

      <a className="logo" href="#home" aria-label="AURELLE home">
        AURELLE
      </a>

      <nav
        id="main-navigation"
        className={`nav ${menuOpen ? 'open' : ''}`}
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a href="#products">Discover</a>
        <a href="#products" aria-label={`Shopping bag, ${cartCount} items`}>
          Bag ({cartCount})
        </a>
      </div>
    </header>
  );
}
