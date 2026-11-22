
import { useState } from 'react';

const collections = [
  {
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000',
  },
  {
    name: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000',
  },
  {
    name: 'Dining',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000',
  },
];

const products = [
  {
    name: 'The Sculpted Sofa',
    category: 'Living Room',
    price: 2450,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900',
  },
  {
    name: 'Atelier Lounge Chair',
    category: 'Accent Furniture',
    price: 1180,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900',
  },
  {
    name: 'Forma Coffee Table',
    category: 'Tables',
    price: 890,
    image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?w=900',
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState<string[]>([]);

  return (
    <main>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #f8f7f4; color: #252720; font-family: 'DM Sans', sans-serif; }
        a { color: inherit; text-decoration: none; }
        button { cursor: pointer; font: inherit; }

        .announcement { background: #252720; color: white; text-align: center; padding: 11px; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; }
        .header { height: 82px; padding: 0 6%; display: flex; align-items: center; justify-content: space-between; background: #f8f7f4; border-bottom: 1px solid #e9e6df; position: sticky; top: 0; z-index: 10; }
        .logo { font-family: 'Playfair Display', serif; font-size: 25px; letter-spacing: 4px; }
        .nav { display: flex; gap: 30px; font-size: 11px; letter-spacing: 1.3px; text-transform: uppercase; }
        .nav a:hover { color: #927c61; }
        .header-actions { display: flex; gap: 20px; font-size: 12px; }
        .menu-button { display: none; border: 0; background: none; font-size: 22px; }

        .hero { min-height: 650px; display: flex; align-items: center; padding: 8%; color: white; background: linear-gradient(90deg, rgba(15,17,15,.72), rgba(15,17,15,.08)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000') center/cover; }
        .hero-content { max-width: 580px; }
        .eyebrow { font-size: 10px; letter-spacing: 4px; text-transform: uppercase; }
        h1,h2,h3 { font-family: 'Playfair Display', serif; font-weight: 400; }
        .hero h1 { font-size: clamp(48px, 7vw, 86px); line-height: 1.08; margin: 24px 0; }
        .hero p { max-width: 430px; font-size: 14px; line-height: 1.9; color: #e8e5de; }
        .primary-button { display: inline-block; margin-top: 25px; padding: 17px 30px; background: #f5f3ed; color: #252720; border: 1px solid #f5f3ed; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; }
        .primary-button:hover { background: transparent; color: white; }

        .section { padding: 95px 7%; }
        .section-heading { text-align: center; margin-bottom: 45px; }
        .section-heading h2 { font-size: clamp(34px, 4vw, 48px); margin: 12px 0; }
        .section-heading p { font-size: 13px; color: #77736b; }
        .collection-grid,.product-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .collection-card { overflow: hidden; }
        .collection-card img { width: 100%; height: 370px; object-fit: cover; display: block; transition: transform .5s; }
        .collection-card:hover img { transform: scale(1.04); }
        .collection-card h3 { font-size: 25px; margin: 20px 0 5px; }
        .collection-card p { font-size: 11px; color: #77736b; }

        .product-card img { width: 100%; height: 330px; object-fit: cover; display: block; background: #ece9e2; }
        .product-card h3 { font-size: 21px; margin: 17px 0 5px; }
        .product-card p { font-size: 11px; color: #77736b; }
        .product-bottom { display: flex; justify-content: space-between; align-items: center; font-size: 13px; gap: 10px; }
        .add-button { background: transparent; border: 1px solid #aaa49a; padding: 10px 14px; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; }
        .add-button:hover { background: #252720; color: white; }

        .story { background: #eae7df; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 60px; }
        .story img { width: 100%; height: 480px; object-fit: cover; }
        .story h2 { font-size: clamp(36px,5vw,58px); line-height: 1.15; }
        .story p { color: #666159; font-size: 13px; line-height: 2; }

        .footer { background: #252720; color: #f6f4ed; padding: 65px 7% 28px; }
        .footer-top { display: flex; justify-content: space-between; gap: 35px; flex-wrap: wrap; }
        .footer h2 { font-size: 30px; letter-spacing: 3px; }
        .footer p { color: #c0bdb4; font-size: 12px; line-height: 1.9; }
        .footer-links { display: flex; gap: 25px; flex-wrap: wrap; font-size: 11px; }
        .copyright { border-top: 1px solid #494a42; margin-top: 40px; padding-top: 20px; color: #c0bdb4; font-size: 10px; }

        @media(max-width:760px) {
          .header { height: 70px; padding: 0 5%; }
          .logo { font-size: 19px; letter-spacing: 2px; }
          .menu-button { display: block; }
          .nav { display: none; position: absolute; top: 70px; left: 0; right: 0; background: #f8f7f4; padding: 25px; flex-direction: column; gap: 22px; border-bottom: 1px solid #ddd; }
          .nav.open { display: flex; }
          .header-actions { gap: 12px; }
          .hero { min-height: 550px; padding: 9% 7%; }
          .section { padding: 65px 6%; }
          .collection-grid,.product-grid { grid-template-columns: 1fr; gap: 35px; }
          .collection-card img,.product-card img { height: 350px; }
          .story { grid-template-columns: 1fr; gap: 25px; }
          .story img { height: 330px; }
        }
      `}</style>

      <div className="announcement">Considered design. Timeless living.</div>

      <header className="header">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <a className="logo" href="#home">AURELLE</a>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Furniture</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
        </nav>
        <div className="header-actions">
          <a href="#products">Discover</a>
          <a href="#products">Bag ({cart.length})</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">The art of considered living</span>
          <h1>Spaces that tell your story.</h1>
          <p>Discover thoughtfully selected furniture where timeless form meets everyday comfort.</p>
          <a className="primary-button" href="#collections">Explore collections</a>
        </div>
      </section>

      <section className="section" id="collections">
        <div className="section-heading">
          <span className="eyebrow">Explore AURELLE</span>
          <h2>Designed for living</h2>
          <p>Distinctive pieces for the spaces that matter most.</p>
        </div>
        <div className="collection-grid">
          {collections.map((item) => (
            <article className="collection-card" key={item.name}>
              <img src={item.image} alt={item.name} loading="lazy" />
              <h3>{item.name}</h3>
              <p>Explore the collection →</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="products">
        <div className="section-heading">
          <span className="eyebrow">The selection</span>
          <h2>Pieces worth keeping</h2>
          <p>Explore signature furniture for considered interiors.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <img src={product.image} alt={product.name} loading="lazy" />
              <p>{product.category}</p>
              <h3>{product.name}</h3>
              <div className="product-bottom">
                <strong>${product.price.toLocaleString('en-US')}</strong>
                <button className="add-button" onClick={() => setCart((items) => [...items, product.name])}>
                  Add to bag
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section story" id="story">
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200" alt="Refined contemporary interior" loading="lazy" />
        <div>
          <span className="eyebrow">Our philosophy</span>
          <h2>Beauty in every detail.</h2>
          <p>We believe a well-designed home is built around pieces that feel natural, thoughtful and enduring. AURELLE brings together considered forms and inviting spaces.</p>
          <a className="primary-button" href="#collections">Discover our world</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div>
            <h2>AURELLE</h2>
            <p>Considered furniture.<br />Timeless living.</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#collections">Collections</a>
            <a href="#products">Furniture</a>
            <a href="#story">Our Story</a>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} AURELLE LIVING. All rights reserved.</div>
      </footer>
    </main>
  );
    }
        
