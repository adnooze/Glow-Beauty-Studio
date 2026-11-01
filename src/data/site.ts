// Sav sadržaj stranice na jednom mjestu. Izvor: Instagram @gllow.beauty.studio
// (bio, objave i cjenovnik objavljen 19. 10. 2026.).

export const studio = {
  name: 'Glow Beauty Studio',
  tagline: 'Your Glow, Our Art.',
  city: 'Sarajevo',
  address: 'Bulevar Stup',
  phone: '+387 60 304 7747',
  phoneHref: 'tel:+387603047747',
  instagram: 'https://www.instagram.com/gllow.beauty.studio/',
  instagramHandle: '@gllow.beauty.studio',
  bookingHref: 'https://ig.me/m/gllow.beauty.studio',
  mapHref: 'https://share.google/BXxNQXCNgsJxZhQ3A',
  followers: '3.500+',
};

export const nav = [
  { label: 'Radovi', href: '#radovi' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'O nama', href: '#o-nama' },
  { label: 'Cjenovnik', href: '#cjenovnik' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const services: { title: string; text: string; image: string; alt: string; focus?: string }[] = [
  {
    title: 'Nokti',
    text: 'Gel na prirodne nokte, nadogradnja, french, ombre i detalji za uredan, ženstven izgled.',
    image: '/images/nails-milky-french.webp',
    alt: 'Mliječnoružičasti french manikir',
  },
  {
    title: 'Trepavice',
    text: 'Nadogradnja trepavica – novi set, korekcija i skidanje, prilagođeno obliku oka.',
    image: '/images/price-lash-ext.webp',
    alt: 'Nadogradnja trepavica u toku',
  },
  {
    title: 'Lash & Brow lift',
    text: 'Podignute, uredne i definisane obrve i trepavice bez svakodnevnog stilizovanja.',
    image: '/images/brow-lift.webp',
    alt: 'Obrve nakon brow lift tretmana',
  },
  {
    title: 'Spray tan',
    text: 'Ravnomjeran, prirodan ten za par minuta – classic ili rapid formula.',
    image: '/images/spray-tan.webp',
    alt: 'Preplanuli ten nakon spray tan tretmana',
    focus: '22% center',
  },
  {
    title: 'Pedikir',
    text: 'Njegovana stopala i uredni nokti, uz skidanje starog materijala po potrebi.',
    image: '/images/price-pedicure.webp',
    alt: 'Njegovani nokti na nogama nakon pedikira',
  },
];

export const features = [
  { icon: 'shield', label: 'Profesionalna usluga' },
  { icon: 'gem', label: 'Kvalitetni materijali' },
  { icon: 'clock', label: 'Dugotrajan efekat' },
  { icon: 'heart', label: 'Siguran i precizan rad' },
  { icon: 'sparkle', label: 'Sve na jednom mjestu' },
  { icon: 'pin', label: 'Bulevar Stup, Sarajevo' },
];

export const marquee = ['manikir', 'nadogradnja trepavica', 'lash lift', 'brow lift', 'spray tan', 'pedikir', 'nadogradnja noktiju', 'french & ombre'];

export const marqueeAlt = ['your glow, our art', 'rezervacije u DM', 'bulevar stup, sarajevo', '+387 60 304 7747'];

export const portfolio = {
  feature: {
    image: '/images/nails-nude-french.webp',
    alt: 'Nude baza i bijeli french',
    caption: 'Nude baza, savršen french i visok sjaj – za nokte koji uvijek izgledaju uredno.',
  },
  items: [
    { image: '/images/nails-red.webp', alt: 'Crveni gel lak', title: 'Klasična crvena', caption: 'Uvijek u modi.' },
    { image: '/images/nails-almond-french.webp', alt: 'Bademasti french nokti', title: 'Almond french', caption: 'Elegancija je u detaljima.' },
    { image: '/images/salon-nail-desk.webp', alt: 'Radni sto za manikir u studiju', title: 'Naš studio', caption: 'Mirno mjesto samo za tebe.' },
  ],
};

export type PriceRow = { name: string; note?: string; price: string };

export const pricing: { title: string; image: string; rows: PriceRow[] }[] = [
  {
    title: 'Lash & Brow lift',
    image: '/images/price-lash-lift.webp',
    rows: [
      { name: 'Lash lift', price: '45 KM' },
      { name: 'Brow lift', note: 'uključuje farbanje, čupanje i oblikovanje', price: '40 KM' },
      { name: 'Lash + Brow lift', price: '80 KM' },
      { name: 'Čupanje obrva', price: '15 KM' },
      { name: 'Čupanje i farbanje obrva', price: '30 KM' },
    ],
  },
  {
    title: 'Nokti',
    image: '/images/price-nails.webp',
    rows: [
      { name: 'Gel na prirodne nokte – kratki', price: '40 KM' },
      { name: 'Gel na prirodne nokte – duži', price: '50 KM' },
      { name: 'Nadogradnja noktiju', price: '55 KM' },
      { name: 'Skidanje tuđeg rada', price: '5–15 KM' },
      { name: 'Ombre', note: 'dodatno', price: '+5 KM' },
      { name: 'French', note: 'dodatno', price: '+5 KM' },
      { name: 'Detalj na noktu', note: 'dodatno', price: '+5 KM' },
    ],
  },
  {
    title: 'Nadogradnja trepavica',
    image: '/images/price-lash-ext.webp',
    rows: [
      { name: 'Nadogradnja trepavica', note: 'novi set', price: '85 KM' },
      { name: 'Korekcija trepavica', price: '70 KM' },
      { name: 'Skidanje trepavica', price: '20 KM' },
      { name: 'Skidanje + novi set', price: '90 KM' },
    ],
  },
  {
    title: 'Spray tan',
    image: '/images/price-spray-tan.webp',
    rows: [
      { name: 'Classic formula', note: 'ispiranje nakon 8h', price: '50 KM' },
      { name: 'Rapid formula', note: 'instant ispiranje (1h–3h)', price: '60 KM' },
    ],
  },
  {
    title: 'Pedikir',
    image: '/images/price-pedicure.webp',
    rows: [
      { name: 'Pedikir', price: '40 KM' },
      { name: 'Skidanje tuđeg materijala', price: '10 KM' },
    ],
  },
];
