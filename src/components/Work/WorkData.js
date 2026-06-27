import ayuvya      from '../../assets/reels/ayuvya.mp4'
import paparizza   from '../../assets/reels/paparizza.mp4'
import savorworks  from '../../assets/reels/savorworks.mp4'
import gharana     from '../../assets/reels/gharana-karigari.mp4'
import silvish     from '../../assets/reels/silvish.mp4'
import remys       from '../../assets/reels/remys.mp4'
import kundaliTalks from '../../assets/reels/kundali_talks.mp4'

export const reels = [
  {
    id: 1,
    brand: "Ayuvya Ayurveda",
    title: "Brand Campaign Reel",
    category: "reels",
    tag: "Ayuvya Ayurveda",
    labelCat: "Reels",
    bgGradient: "linear-gradient(160deg, #2d5a3d 0%, #1a3d2a 50%, #0d2418 100%)",
    instaUrl: "YOUR_INSTAGRAM_REEL_URL_1",
    videoSrc: ayuvya
  },
  {
    id: 2,
    brand: "Paparizza",
    title: "Food & Vibe Reel",
    category: "reels",
    tag: "Paparizza",
    labelCat: "Reels",
    bgGradient: "linear-gradient(160deg, #8b5e3c 0%, #6b3e28 50%, #3d1f10 100%)",
    instaUrl: "YOUR_INSTAGRAM_REEL_URL_2",
    videoSrc: paparizza
  },
  {
    id: 3,
    brand: "Savorworks",
    title: "Brand Story Reel",
    category: "brand-shoots",
    tag: "Savorworks",
    labelCat: "Brand Shoots",
    bgGradient: "linear-gradient(160deg, #5a3d6b 0%, #3d2050 50%, #1f0d30 100%)",
    instaUrl: "YOUR_INSTAGRAM_REEL_URL_3",
    videoSrc: savorworks
  },
  {
    id: 4,
    brand: "Gharana Karigari",
    title: "Ethnic Wear Shoot",
    category: "modeling",
    tag: "Gharana Karigari",
    labelCat: "Modeling",
    bgGradient: "linear-gradient(160deg, #6b4a2a 0%, #4a2d10 50%, #2a1500 100%)",
    instaUrl: "YOUR_INSTAGRAM_REEL_URL_4",
    videoSrc: gharana
  },
  {
    id: 5,
    brand: "Silvish",
    title: "Jewellery Campaign",
    category: "modeling",
    tag: "Silvish",
    labelCat: "Modeling",
    bgGradient: "linear-gradient(160deg, #4a6b5a 0%, #2d4a3a 50%, #0d2018 100%)",
    instaUrl: "YOUR_INSTAGRAM_REEL_URL_5",
    videoSrc: silvish
  },
  {
    id: 6,
    brand: "Remys",
    title: "Restaurant Vibes",
    category: "brand-shoots",
    tag: "Remys",
    labelCat: "Brand Shoots",
    bgGradient: "linear-gradient(160deg, #3d5a8b 0%, #1a3060 50%, #0a1530 100%)",
    instaUrl: "YOUR_INSTAGRAM_REEL_URL_6",
    videoSrc: remys
  },
  {
    id: 7,
    brand: "Kundali Talks",
    title: "Brand Campaign Reel",
    category: "reels",
    tag: "Kundali Talks",
    labelCat: "All",
    bgGradient: "linear-gradient(160deg, #2d5a3d 0%, #1a3d2a 50%, #0d2418 100%)",
    instaUrl: "YOUR_INSTAGRAM_REEL_URL_1",
    videoSrc: kundaliTalks
  }
]

export const filters = [
  { label: "All",          value: "all"          },
  { label: "Reels",        value: "reels"        },
  { label: "Brand Shoots", value: "brand-shoots" },
  { label: "Modeling",     value: "modeling"     }
]
