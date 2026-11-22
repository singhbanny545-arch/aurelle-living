
interface HeroSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function HeroSection({
  eyebrow = 'THE ART OF CONSIDERED LIVING',
  title = 'Spaces that tell your story.',
  description = 'Discover thoughtfully selected furniture where timeless form meets everyday comfort.',
  image = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000',
  buttonText = 'Explore Collections',
  buttonLink = '#collections',
}: HeroSectionProps) {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(15,17,15,.72),
            rgba(15,17,15,.08)
          ),
          url("${image}")
        `,
      }}
    >
      <div className="hero-content">
        <span className="eyebrow">{eyebrow}</span>

        <h1>{title}</h1>

        <p>{description}</p>

        <a className="primary-button" href={buttonLink}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
