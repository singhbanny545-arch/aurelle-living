
interface Collection {
  name: string;
  subtitle: string;
  image: string;
  link: string;
}

interface CollectionSectionProps {
  title?: string;
  eyebrow?: string;
  description?: string;
}

const collections: Collection[] = [
  {
    name: 'Living Room',
    subtitle: 'Spaces made for living',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000',
    link: '#products',
  },
  {
    name: 'Bedroom',
    subtitle: 'Rest in refined comfort',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000',
    link: '#products',
  },
  {
    name: 'Dining',
    subtitle: 'Gather beautifully',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000',
    link: '#products',
  },
];

export default function CollectionSection({
  title = 'Designed for living',
  eyebrow = 'EXPLORE AURELLE',
  description = 'Distinctive pieces for the spaces that matter most.',
}: CollectionSectionProps) {
  return (
    <section className="section" id="collections">
      <div className="section-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="collection-grid">
        {collections.map((collection) => (
          <article
            className="collection-card"
            key={collection.name}
          >
            <a href={collection.link}>
              <img
                src={collection.image}
                alt={`${collection.name} furniture collection`}
                loading="lazy"
              />
              <h3>{collection.name}</h3>
              <p>{collection.subtitle} →</p>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
