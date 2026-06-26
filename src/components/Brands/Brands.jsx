import './Brands.css'
import ayuvyaLogo         from '../../assets/brand_logos/auvya.png'
import paparizzaLogo      from '../../assets/brand_logos/paparizza.png'
import savorworksLogo     from '../../assets/brand_logos/Sava.png'
import consciousChemistLogo from '../../assets/brand_logos/conssious_chemist.png'
import remysLogo from '../../assets/brand_logos/remys.png'
import silvishLogo from '../../assets/brand_logos/silvish.png'

export default function Brands() {
  const brands = [
    { name: "Ayuvya Ayurveda",    type: "Wellness",  logo: ayuvyaLogo },
    { name: "Remys",              type: "F&B",       logo: remysLogo},
    { name: "Paparizza",          type: "F&B",       logo: paparizzaLogo },
    { name: "Savorworks",         type: "F&B",       logo: savorworksLogo },
    { name: "Jujube",             type: "F&B",       logo: null },
    { name: "Gharana Karigari",   type: "Fashion",   logo: null },
    { name: "Silvish",            type: "Jewellery", logo: silvishLogo},
    { name: "The Social Journey", type: "Weddings",  logo: null },
    { name: "The Boss Hub",       type: "Marketing", logo: null },
    { name: "Conscious Chemist",  type: "Wellness",  logo: consciousChemistLogo },
  ]

  const BrandChip = ({ brand, index }) => (
    <div className="brand-chip" key={index}>
      {brand.logo ? (
        <div className="brand-logo-wrap">
          <img src={brand.logo} alt={brand.name} className="brand-logo" />
          <p className="brand-type">{brand.type}</p>
        </div>
      ) : (
        <>
          <div className="brand-icon">
            <span>{brand.name.charAt(0)}</span>
          </div>
          <div className="brand-text">
            <p className="brand-name">{brand.name}</p>
            <p className="brand-type">{brand.type}</p>
          </div>
        </>
      )}
      <span className="brand-sep">✦</span>
    </div>
  )

  return (
    <section id="brands" className="brands-section">

      <p className="brands-label">Brands I&apos;ve Worked With</p>

      <div className="marquee-outer">

        {/* Single row — scrolls left */}
        <div className="marquee-track">
          {brands.map((brand, i) => (
            <BrandChip brand={brand} index={i} key={`a-${i}`} />
          ))}
          {brands.map((brand, i) => (
            <BrandChip brand={brand} index={i} key={`b-${i}`} />
          ))}
        </div>

      </div>
    </section>
  )
}
