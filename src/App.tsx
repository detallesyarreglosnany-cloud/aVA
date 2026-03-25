import React, { useState } from 'react';
import { Menu, Search, X, Instagram, MapPin, MessageCircle, Share2, ChevronRight, Info, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { CATEGORIES, BUSINESSES } from './data';
import { cn } from './lib/utils';
import { Business, Category } from './types';
import { format, isWithinInterval, parse } from 'date-fns';

// --- Components ---

const Header = ({ onOpenMenu }: { onOpenMenu: () => void }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-beige-sand/80 backdrop-blur-md border-b border-black/5 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onOpenMenu} className="p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-extrabold tracking-tighter text-jungle-green font-display">
          VITRINA<span className="text-olive-green">AMAZONAS</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-2">
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="relative"
            >
              <input 
                autoFocus
                type="text"
                placeholder="Buscar..."
                className="w-full bg-black/5 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-jungle-green outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <button 
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="p-2 hover:bg-black/5 rounded-full transition-colors"
        >
          {isSearchOpen ? <X size={20} /> : <Search size={20} />}
        </button>
      </div>
    </header>
  );
};

const HeroSlider = () => {
  const slides = [
    {
      title: "El Directorio Premium de tu Ciudad",
      subtitle: "Vitrina Amazonas",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000",
      cta: "Explorar Ahora"
    },
    {
      title: "Descubre lo mejor en Moda y Estética",
      subtitle: "Promoción VIP",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
      cta: "Ver Founders"
    },
    {
      title: "Todo a un clic de distancia",
      subtitle: "Funcionalidad",
      image: "https://images.unsplash.com/photo-1512428559083-a40ce12044a5?auto=format&fit=crop&q=80&w=1000",
      cta: "Contactar"
    },
    {
      title: "¿Tu negocio no está aquí?",
      subtitle: "Únete a la vitrina más exclusiva",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      cta: "Quiero Aparecer",
      isCTA: true
    }
  ];

  return (
    <section className="px-6 py-4">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="h-[400px] rounded-4xl overflow-hidden shadow-2xl shadow-black/10"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-12 left-8 right-8 text-white">
                <p className="text-beige-sand/80 text-xs font-bold uppercase tracking-widest mb-2">{slide.subtitle}</p>
                <h2 className="text-3xl font-extrabold font-display leading-tight mb-6">{slide.title}</h2>
                <button className={cn(
                  "px-6 py-3 rounded-full font-bold text-sm transition-all active:scale-95",
                  slide.isCTA ? "bg-olive-green text-white" : "bg-white text-black"
                )}>
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const CategoryGrid = ({ onSelectCategory }: { onSelectCategory: (cat: Category) => void }) => {
  return (
    <section className="px-6 py-8">
      <h3 className="text-lg font-bold font-display mb-6 flex items-center gap-2">
        Explorar Categorías <ChevronRight size={18} className="text-olive-green" />
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-3xl group-active:scale-90 transition-transform border border-black/5">
              {cat.icon}
            </div>
            <span className="text-[10px] font-bold text-center uppercase tracking-tighter text-black/60 leading-tight">
              {cat.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

const FlashOffers = () => {
  const offers = BUSINESSES.filter(b => b.isFlashOffer);

  return (
    <section className="px-6 py-8 bg-jungle-green/5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold font-display flex items-center gap-2">
          Ofertas Relámpago ⚡
        </h3>
        <span className="text-[10px] font-bold bg-jungle-green text-white px-2 py-1 rounded-full uppercase">24 Horas</span>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {offers.map(offer => (
          <div key={offer.id} className="min-w-[280px] bg-white rounded-4xl p-6 shadow-xl shadow-black/5 border border-black/5">
            <div className="flex items-center gap-4 mb-4">
              <img src={offer.logo} alt={offer.name} className="w-12 h-12 rounded-2xl object-cover" referrerPolicy="no-referrer" />
              <div>
                <h4 className="font-bold text-sm">{offer.name}</h4>
                <p className="text-xs text-black/40">{offer.subcategory}</p>
              </div>
            </div>
            <p className="text-sm font-medium text-jungle-green mb-4 leading-relaxed">
              {offer.flashOfferText}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-bold text-olive-green uppercase tracking-widest">Vence pronto</div>
              <button className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold active:scale-95 transition-transform">
                Ver Oferta
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const AdCarousel = () => {
  return (
    <section className="px-6 py-8">
      <div className="bg-olive-green/10 rounded-4xl p-1 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          className="h-24"
        >
          {[1, 2, 3].map(i => (
            <SwiperSlide key={i}>
              <div className="w-full h-full flex items-center justify-center text-olive-green font-bold text-xs uppercase tracking-widest text-center px-8">
                Espacio Publicitario Disponible #{i} <br />
                <span className="text-[10px] opacity-60">Contáctanos para destacar aquí</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const FeaturedVIP = () => {
  const featured = BUSINESSES.filter(b => b.isFeatured || b.badges.includes('Recomendado'));

  return (
    <section className="px-6 py-8">
      <h3 className="text-lg font-bold font-display mb-6">Destacados VIP de la semana ✨</h3>
      <div className="grid grid-cols-1 gap-6">
        {featured.map(biz => (
          <div key={biz.id} className="relative bg-white rounded-4xl overflow-hidden shadow-xl shadow-black/5 border border-black/5 group">
            <div className="h-48 relative">
              <img src={biz.images[0]} alt={biz.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 flex gap-2">
                {biz.badges.map(badge => (
                  <span key={badge} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-bold uppercase tracking-widest text-jungle-green shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-extrabold font-display">{biz.name}</h4>
                  <p className="text-xs text-black/40 font-medium">{biz.subcategory}</p>
                </div>
                <div className={cn(
                  "px-2 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest",
                  "bg-green-100 text-green-700"
                )}>
                  Abierto
                </div>
              </div>
              <p className="text-sm text-black/60 line-clamp-2 mb-6 leading-relaxed">
                {biz.description}
              </p>
              <div className="flex gap-3">
                <button className="flex-1 bg-jungle-green text-white py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform">
                  <MessageCircle size={16} /> WhatsApp
                </button>
                <button className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center active:scale-90 transition-transform">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const NewsCarousel = () => {
  const news = [
    { title: "Historias que inspiran: Emprendimiento local", date: "24 Mar" },
    { title: "Nuevas aperturas en el centro", date: "22 Mar" },
    { title: "Guía de eventos para el fin de semana", date: "20 Mar" }
  ];

  return (
    <section className="px-6 py-8 bg-black text-white rounded-t-[40px]">
      <h3 className="text-lg font-bold font-display mb-6">Noticias & Historias 📖</h3>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        className="h-40"
      >
        {news.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="h-full flex flex-col justify-center p-6 border border-white/10 rounded-3xl">
              <span className="text-[10px] font-bold text-olive-green uppercase tracking-widest mb-2">{item.date}</span>
              <h4 className="text-xl font-bold font-display leading-tight">{item.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-12 text-center">
      <div className="mb-8">
        <h2 className="text-2xl font-black font-display tracking-tighter mb-2">VITRINA<span className="text-olive-green">AMAZONAS</span></h2>
        <p className="text-white/40 text-xs font-medium">El Directorio Premium de Puerto Ayacucho</p>
      </div>

      <div className="bg-white/5 rounded-4xl p-8 mb-12 border border-white/10">
        <h4 className="text-lg font-bold mb-4">¿Quieres una web así?</h4>
        <p className="text-sm text-white/60 mb-6">Diseñamos soluciones digitales exclusivas para tu negocio o servicio.</p>
        <button className="w-full bg-white text-black py-4 rounded-full font-bold text-sm active:scale-95 transition-transform">
          Contáctanos
        </button>
      </div>

      <div className="flex flex-col gap-6 mb-12">
        <a href="#" className="flex items-center justify-between text-sm font-bold border-b border-white/10 pb-4">
          Preguntas Frecuentes <HelpCircle size={18} className="text-olive-green" />
        </a>
        <a href="#" className="flex items-center justify-between text-sm font-bold border-b border-white/10 pb-4">
          Términos y Condiciones <Info size={18} className="text-olive-green" />
        </a>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-4">
          <a href="https://instagram.com/vitrinamazonas" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <MapPin size={20} />
          </a>
        </div>
        <p className="text-[10px] text-white/20 font-medium uppercase tracking-widest">
          Puerto Ayacucho, Venezuela <br />
          © 2026 Vitrina Amazonas. Derechos Reservados.
        </p>
        <button className="bg-olive-green text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest active:scale-95 transition-transform">
          Quiero Aparecer Aquí
        </button>
      </div>
    </footer>
  );
};

const SideMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-beige-sand z-[70] p-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-black font-display tracking-tighter">VITRINA</h2>
              <button onClick={onClose} className="p-2 bg-black/5 rounded-full">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] font-bold text-olive-green uppercase tracking-widest mb-4">Categorías</h3>
                <div className="grid grid-cols-1 gap-4">
                  {CATEGORIES.map(cat => (
                    <button key={cat.id} className="flex items-center gap-4 text-sm font-bold group">
                      <span className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm group-active:scale-90 transition-transform">
                        {cat.icon}
                      </span>
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-black/5">
                <h3 className="text-[10px] font-bold text-olive-green uppercase tracking-widest mb-4">Atajos</h3>
                <div className="flex flex-col gap-4">
                  <button className="text-sm font-bold flex items-center gap-3"><ChevronRight size={16} /> Destacados</button>
                  <button className="text-sm font-bold flex items-center gap-3"><ChevronRight size={16} /> Ofertas</button>
                  <button className="text-sm font-bold flex items-center gap-3"><ChevronRight size={16} /> Noticias</button>
                  <button className="text-sm font-bold flex items-center gap-3"><ChevronRight size={16} /> Contacto</button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const BusinessDetail = ({ business, isOpen, onClose }: { business: Business | null, isOpen: boolean, onClose: () => void }) => {
  if (!business) return null;

  const isOpenNow = () => {
    const now = new Date();
    const currentTime = format(now, 'HH:mm');
    return currentTime >= business.schedule.open && currentTime <= business.schedule.close;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Vitrina Amazonas - ${business.name}`,
          text: `Mira este comercio en Vitrina Amazonas: ${business.description}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      alert('Copiado al portapapeles');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[80]"
          />
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 h-[92%] bg-beige-sand z-[90] rounded-t-[40px] overflow-hidden flex flex-col"
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-black/10 rounded-full z-10" />
            
            <div className="overflow-y-auto flex-1 no-scrollbar">
              <div className="h-80 relative">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className="h-full"
                >
                  {business.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt={business.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white z-20"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-3xl font-black font-display">{business.name}</h2>
                      {business.badges.includes('Recomendado') && <span className="text-xl">⭐</span>}
                    </div>
                    <p className="text-sm font-bold text-olive-green uppercase tracking-widest">{business.subcategory}</p>
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                    isOpenNow() ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  )}>
                    {isOpenNow() ? 'Abierto' : 'Cerrado'}
                  </div>
                </div>

                <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar">
                  {business.badges.map(badge => (
                    <span key={badge} className="whitespace-nowrap px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest border border-black/5 shadow-sm">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="space-y-6 mb-12">
                  <div>
                    <h4 className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-2">Descripción</h4>
                    <p className="text-black/70 leading-relaxed">{business.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-3xl border border-black/5">
                      <h4 className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-1">Horario</h4>
                      <p className="text-sm font-bold">{business.schedule.open} - {business.schedule.close}</p>
                    </div>
                    {business.instagram && (
                      <a 
                        href={`https://instagram.com/${business.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white rounded-3xl border border-black/5 flex flex-col justify-center"
                      >
                        <h4 className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-1">Instagram</h4>
                        <p className="text-sm font-bold flex items-center gap-1">@{business.instagram}</p>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border-t border-black/5 flex gap-4">
              <a 
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-jungle-green text-white py-5 rounded-full font-bold text-sm flex items-center justify-center gap-3 shadow-xl shadow-jungle-green/20 active:scale-95 transition-transform"
              >
                <MessageCircle size={20} /> Contactar WhatsApp
              </a>
              <button 
                onClick={handleShare}
                className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center active:scale-90 transition-transform"
              >
                <Share2 size={24} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | 'ALL'>('ALL');
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const filteredBusinesses = activeCategory === 'ALL' 
    ? BUSINESSES 
    : activeSubcategory 
      ? BUSINESSES.filter(b => b.category === activeCategory && b.subcategory === activeSubcategory)
      : BUSINESSES.filter(b => b.category === activeCategory);

  const currentCategoryInfo = activeCategory !== 'ALL' ? CATEGORIES.find(c => c.id === activeCategory) : null;

  const handleCategorySelect = (cat: Category) => {
    setActiveCategory(cat);
    setActiveSubcategory(null);
    document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubcategorySelect = (sub: string) => {
    setActiveSubcategory(sub);
    document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' });
  };

  const resetNavigation = () => {
    setActiveCategory('ALL');
    setActiveSubcategory(null);
  };

  const goBack = () => {
    if (activeSubcategory) {
      setActiveSubcategory(null);
    } else {
      setActiveCategory('ALL');
    }
  };

  return (
    <div className="min-h-screen bg-beige-sand">
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <BusinessDetail 
        business={selectedBusiness} 
        isOpen={!!selectedBusiness} 
        onClose={() => setSelectedBusiness(null)} 
      />
      
      <Header onOpenMenu={() => setIsMenuOpen(true)} />
      
      <main className="pb-20">
        <HeroSlider />
        
        <CategoryGrid onSelectCategory={handleCategorySelect} />
        
        <FlashOffers />
        
        <AdCarousel />
        
        <section className="px-6 py-8">
          <h3 className="text-lg font-bold font-display mb-6">Destacados VIP de la semana ✨</h3>
          <div className="grid grid-cols-1 gap-6">
            {BUSINESSES.filter(b => b.isFeatured).map(biz => (
              <div 
                key={biz.id} 
                onClick={() => setSelectedBusiness(biz)}
                className="relative bg-white rounded-4xl overflow-hidden shadow-xl shadow-black/5 border border-black/5 group cursor-pointer"
              >
                <div className="h-48 relative">
                  <img src={biz.images[0]} alt={biz.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {biz.badges.map(badge => (
                      <span key={badge} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-bold uppercase tracking-widest text-jungle-green shadow-sm">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-extrabold font-display">{biz.name}</h4>
                      <p className="text-xs text-black/40 font-medium">{biz.subcategory}</p>
                    </div>
                  </div>
                  <p className="text-sm text-black/60 line-clamp-2 mb-6 leading-relaxed">
                    {biz.description}
                  </p>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-jungle-green text-white py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform">
                      <MessageCircle size={16} /> Ver Detalles
                    </button>
                    <button className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center active:scale-90 transition-transform" onClick={(e) => { e.stopPropagation(); /* handle share */ }}>
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <NewsCarousel />
        
        <section className="px-6 py-12" id="directory">
          <div className="bg-white rounded-4xl p-8 shadow-xl shadow-black/5 text-center border border-black/5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                {(activeCategory !== 'ALL' || activeSubcategory) && (
                  <button 
                    onClick={goBack}
                    className="p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors"
                  >
                    <X size={16} className="rotate-45" /> {/* Simple back arrow using X rotated */}
                  </button>
                )}
                <h3 className="text-xl font-bold font-display">
                  {activeSubcategory ? activeSubcategory : activeCategory !== 'ALL' ? currentCategoryInfo?.label : 'Directorio'}
                </h3>
              </div>
              {activeCategory !== 'ALL' && (
                <button 
                  onClick={resetNavigation}
                  className="text-[10px] font-bold text-olive-green uppercase tracking-widest bg-olive-green/10 px-3 py-1 rounded-full"
                >
                  Inicio
                </button>
              )}
            </div>
            
            {/* Navigation Breadcrumb / Info */}
            {activeCategory !== 'ALL' && !activeSubcategory && (
              <div className="mb-8 p-4 bg-jungle-green/5 rounded-3xl flex items-center gap-4">
                <div className="text-3xl">{currentCategoryInfo?.icon}</div>
                <div className="text-left">
                  <h4 className="font-bold text-sm">Selecciona una Subcategoría</h4>
                  <p className="text-[10px] text-black/40 font-bold uppercase tracking-tighter">
                    {currentCategoryInfo?.label}
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {/* Step 1: Show Categories if nothing selected (Handled by CategoryGrid above, but can show list here too) */}
              {activeCategory === 'ALL' && (
                <div className="grid grid-cols-1 gap-3">
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className="flex items-center justify-between p-4 bg-black/5 rounded-3xl active:scale-98 transition-transform"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{cat.icon}</div>
                        <span className="font-bold text-sm">{cat.label}</span>
                      </div>
                      <ChevronRight size={18} className="text-olive-green" />
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Show Subcategories if Category selected */}
              {activeCategory !== 'ALL' && !activeSubcategory && (
                <div className="grid grid-cols-1 gap-3">
                  {currentCategoryInfo?.subcategories.map(sub => (
                    <button 
                      key={sub}
                      onClick={() => handleSubcategorySelect(sub)}
                      className="flex items-center justify-between p-4 bg-olive-green/5 rounded-3xl active:scale-98 transition-transform border border-olive-green/10"
                    >
                      <span className="font-bold text-sm">{sub}</span>
                      <ChevronRight size={18} className="text-olive-green" />
                    </button>
                  ))}
                </div>
              )}

              {/* Step 3: Show Businesses if Subcategory selected */}
              {activeSubcategory && (
                <div className="space-y-4">
                  {filteredBusinesses.length > 0 ? (
                    filteredBusinesses.map(biz => (
                      <div 
                        key={biz.id} 
                        onClick={() => setSelectedBusiness(biz)}
                        className="flex items-center justify-between p-4 bg-black/5 rounded-3xl active:scale-98 transition-transform cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <img src={biz.logo} alt={biz.name} className="w-10 h-10 rounded-xl object-cover" referrerPolicy="no-referrer" />
                          <div className="text-left">
                            <h4 className="font-bold text-sm">{biz.name}</h4>
                            <div className="flex gap-1">
                              {biz.badges.slice(0, 1).map(b => (
                                <span key={b} className="text-[8px] font-bold text-olive-green uppercase">{b}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <ChevronRight size={18} className="text-olive-green" />
                      </div>
                    ))
                  ) : (
                    <div className="py-12 text-center">
                      <p className="text-sm text-black/40">No hay comercios registrados en esta subcategoría aún.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



