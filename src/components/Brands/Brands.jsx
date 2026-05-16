import './Brands.css'

export default function Brands() {
  const brands = [
    { name: "Ayuvya Ayurveda",    type: "Wellness",  icon: "🌿" },
    { name: "Remys",              type: "F&B",       icon: "🍽️" },
    { name: "Paparizza",          type: "F&B",       icon: "🍕" },
    { name: "Savorworks",         type: "F&B",       icon: "🥗" },
    { name: "Jujube",             type: "F&B",       icon: "🌸" },
    { name: "Gharana Karigari",   type: "Fashion",   icon: "👗" },
    { name: "Silvish",            type: "Jewellery", icon: "💎" },
    { name: "The Social Journey", type: "Weddings",  icon: "💍" },
    { name: "The Boss Hub",       type: "Marketing", icon: "📱" },
  ]

  const BrandChip = ({ brand, index }) => (
    <div className="brand-chip" key={index}>
      <div className="brand-icon">
        <span>{brand.icon}</span>
      </div>
      <div className="brand-text">
        <p className="brand-name">{brand.name}</p>
        <p className="brand-type">{brand.type}</p>
      </div>
      <span className="brand-sep">✦</span>
    </div>
  )

  return (
    <section id="brands" className="brands-section">

      <p className="brands-label">Brands I&apos;ve Worked With</p>

      <div className="marquee-outer">

        {/* Row 1 — scrolls left */}
        <div className="marquee-track">
          {brands.map((brand, i) => (
            <BrandChip brand={brand} index={i} key={`a-${i}`} />
          ))}
          {brands.map((brand, i) => (
            <BrandChip brand={brand} index={i} key={`b-${i}`} />
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-track-reverse">
          {[...brands].reverse().map((brand, i) => (
            <BrandChip brand={brand} index={i} key={`c-${i}`} />
          ))}
          {[...brands].reverse().map((brand, i) => (
            <BrandChip brand={brand} index={i} key={`d-${i}`} />
          ))}
        </div>

      </div>
    </section>
  )
}