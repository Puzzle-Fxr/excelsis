import { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Clock, ChevronRight, 
  Building2, Users, Shield, TrendingUp, Award, Heart,
  Linkedin, Twitter, Facebook
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
               <img src="/images/creditunionlogo.png" alt="Company Logo" style={{ width: '80px' }} />
              <div>
                <h1 className="font-serif text-xl font-semibold text-cream-50">Accra Christ The King</h1>
                <p className="text-xs text-gold-400 tracking-widest uppercase">Cooperative Credit Union</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Testimonials', 'Leadership', 'Location'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-cream-100/80 hover:text-gold-400 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
              <button
              onClick={() => scrollToSection('location')} 
              className="btn-gold px-6 py-2.5 rounded-full font-semibold"
              >
                Become a Member
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cream-50 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy-800/95 backdrop-blur-lg border-t border-gold-400/20">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'About', 'Testimonials', 'Leadership', 'Location'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-cream-100 hover:text-gold-400 py-2 font-medium"
                >
                  {item}
                </button>
              ))}
              <button className="btn-gold w-full px-6 py-3 rounded-full font-semibold mt-4">
                Become a Member
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-bank.jpg)' }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-navy-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gold-400/30 mb-8">
              <Award className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-gold-400 font-medium">Trusted Since 1983</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-cream-50 leading-tight mb-6" >
                Credit Union,
                <span className="text-gradient-gold"> Happy Family!</span>
              </h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <p className="text-xl text-cream-100/80 max-w-2xl mb-10 leading-relaxed" style={{ textAlign: 'center' }}>
                Accra Christ The King Cooperative Credit Union is a member-focused financial 
                cooperative dedicated to promoting a strong savings culture and providing 
                accessible loan facilities to its members to support their financial growth 
                and future security.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4" style={{ justifyContent: 'center' }}>
              <button className="btn-gold px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center group">
                Start Your Journey
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline-gold px-8 py-4 rounded-full font-semibold text-lg">
                Explore Services
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gold-400/20">
              {[
                { value: '70+', label: 'Years of Service' },
                { value: '$2.5B', label: 'Assets Managed' },
                { value: '85,000+', label: 'Members' },
                { value: '4.9★', label: 'Member Rating' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="font-serif text-3xl sm:text-4xl font-bold text-gold-400">{stat.value}</p>
                  <p className="text-cream-100/60 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 lg:py-32 bg-gradient-radial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gold-400 font-medium tracking-widest uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50 mb-6">
              A Legacy of Trust & Service
            </h2>
            <div className="decorative-line mx-auto" />
          </div>

          {/* History Timeline */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="font-serif text-3xl font-semibold text-cream-50 mb-6">
                Founded on Principles That Endure
              </h3>
              <p className="text-cream-100/80 leading-relaxed mb-6">
                In 1952, a group of dedicated teachers in Millbrook came together with a 
                simple but powerful idea: that by pooling their resources, they could help 
                each other achieve financial security. With just $500 in initial deposits, 
                Heritage Trust Credit Union was born.
              </p>
              <p className="text-cream-100/80 leading-relaxed mb-6">
                What started as a small teachers' credit union has grown into a 
                full-service financial institution serving over 85,000 members across 
                the tri-state area. Yet our founding principle remains unchanged: 
                <span className="text-gold-400 font-medium"> people helping people</span>.
              </p>
              <p className="text-cream-100/80 leading-relaxed">
                Today, we continue to honor the vision of our founders by providing 
                personalized financial solutions, competitive rates, and the kind of 
                service that can only come from a true community partner.
              </p>
            </div>
            
            <div className="card-glass rounded-3xl p-8">
              <h4 className="font-serif text-2xl font-semibold text-gold-400 mb-6">Our Milestones</h4>
              <div className="space-y-6">
                {[
                  { year: '1952', event: 'Founded by 12 teachers with $500 in deposits' },
                  { year: '1978', event: 'Expanded membership to include all county employees' },
                  { year: '1995', event: 'Reached $100 million in assets' },
                  { year: '2008', event: 'Opened new headquarters in downtown Millbrook' },
                  { year: '2015', event: 'Launched mobile banking platform' },
                  { year: '2023', event: 'Surpassed $2.5 billion in assets under management' },
                ].map((milestone, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <span className="font-serif text-lg font-bold text-gold-400 w-16">{milestone.year}</span>
                    <p className="text-cream-100/80 pt-0.5">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Member First', desc: 'Every decision we make starts with one question: what\'s best for our members?' },
              { icon: Shield, title: 'Security', desc: 'Your deposits are federally insured up to $250,000 by the NCUA.' },
              { icon: Heart, title: 'Community', desc: 'We reinvest in local communities through scholarships and sponsorships.' },
              { icon: TrendingUp, title: 'Growth', desc: 'We help members build wealth through smart financial products and guidance.' },
            ].map((value, i) => (
              <div key={i} className="card-glass rounded-2xl p-6 hover:border-gold-400/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-4 group-hover:bg-gold-400/20 transition-colors">
                  <value.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-cream-50 mb-2">{value.title}</h4>
                <p className="text-cream-100/60 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 lg:py-32 bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gold-400 font-medium tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50 mb-6">
              Stories From Our Members
            </h2>
            <div className="decorative-line mx-auto" />
            <p className="text-cream-100/70 mt-6 max-w-2xl mx-auto">
              Don't just take our word for it—hear from the families and businesses 
              who have made Heritage Trust their financial home.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: '/images/testimonial-1.jpg',
                name: 'Marcus Thompson',
                role: 'Small Business Owner',
                quote: 'When other banks turned me down for a business loan, Heritage Trust took the time to understand my vision. They didn\'t just see numbers—they saw potential. My restaurant is now thriving, and I\'ll never bank anywhere else.',
              },
              {
                image: '/images/testimonial-2.jpg',
                name: 'Robert & Linda Chen',
                role: 'Retired Educators',
                quote: 'We\'ve been members for 40 years. Heritage Trust helped us buy our first home, put our kids through college, and now they\'re helping us enjoy a comfortable retirement. They\'re not just bankers—they\'re family.',
              },
              {
                image: '/images/testimonial-3.jpg',
                name: 'Jessica Williams',
                role: 'Marketing Director',
                quote: 'The mobile app is fantastic, but what I really love is that I can still walk into a branch and be greeted by name. Heritage Trust combines modern convenience with old-fashioned personal service.',
              },
            ].map((testimonial, i) => (
              <div key={i} className="card-glass rounded-3xl p-8 relative overflow-hidden group hover:border-gold-400/30 transition-all">
                {/* Quote Mark */}
                <div className="absolute top-6 right-6 text-gold-400/20">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold-400/30"
                  />
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-cream-50">{testimonial.name}</h4>
                    <p className="text-gold-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-cream-100/80 leading-relaxed italic">"{testimonial.quote}"</p>
                
                {/* Stars */}
                <div className="flex space-x-1 mt-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executives Section */}
      <section id="leadership" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gold-400 font-medium tracking-widest uppercase mb-4">Leadership</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50 mb-6">
              Meet Our Executive Team
            </h2>
            <div className="decorative-line mx-auto" />
            <p className="text-cream-100/70 mt-6 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in banking, 
              finance, and community service to guide Heritage Trust into the future.
            </p>
          </div>

          {/* Executive Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: '/images/executive-1.jpg',
                name: 'William J. Harrison',
                title: 'President & CEO',
                bio: '30+ years in credit union leadership. Former NCUA board member.',
                linkedin: '#',
              },
              {
                image: '/images/executive-2.jpg',
                name: 'Dr. Patricia Chen',
                title: 'Chief Financial Officer',
                bio: 'Former VP at Wells Fargo. CPA with expertise in risk management.',
                linkedin: '#',
              },
              {
                image: '/images/executive-3.jpg',
                name: 'Michael Rodriguez',
                title: 'Chief Operating Officer',
                bio: '20 years in banking operations. Led digital transformation initiatives.',
                linkedin: '#',
              },
              {
                image: '/images/executive-4.jpg',
                name: 'Sarah Mitchell',
                title: 'Chief Member Experience Officer',
                bio: 'Passionate about member service. Previously led CX at USAA.',
                linkedin: '#',
              },
            ].map((exec, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={exec.image} 
                    alt={exec.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />
                  
                  {/* Social Link */}
                  <a 
                    href={exec.linkedin}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Linkedin className="w-5 h-5 text-navy-900" />
                  </a>
                </div>
                
                <h4 className="font-serif text-xl font-semibold text-cream-50">{exec.name}</h4>
                <p className="text-gold-400 font-medium text-sm mb-2">{exec.title}</p>
                <p className="text-cream-100/60 text-sm">{exec.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 lg:py-32 bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gold-400 font-medium tracking-widest uppercase mb-4">Visit Us</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50 mb-6">
              Our Location
            </h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card-glass rounded-3xl p-8">
                <h3 className="font-serif text-2xl font-semibold text-cream-50 mb-6">Headquarters</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream-50 mb-1">Main Office</h4>
                      <p className="text-cream-100/70">1250 Heritage Boulevard<br />Millbrook, NY 12545</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream-50 mb-1">Phone</h4>
                      <p className="text-cream-100/70">(555) 234-5678</p>
                      <p className="text-cream-100/70 text-sm">Toll-free: (800) 555-HERITAGE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream-50 mb-1">Email</h4>
                      <p className="text-cream-100/70">info@heritagetrustcu.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream-50 mb-1">Hours</h4>
                      <p className="text-cream-100/70">Mon-Fri: 9:00 AM - 5:00 PM</p>
                      <p className="text-cream-100/70">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-cream-100/70">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a 
                  href="https://maps.google.com/?q=1250+Heritage+Blvd+Millbrook+NY" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-6 py-4 rounded-xl font-semibold text-center flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </a>
                <a 
                  href="tel:5552345678"
                  className="btn-outline-gold px-6 py-4 rounded-xl font-semibold text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-gold-400/20 h-[500px]">
              <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=-73.7122%2C41.7822%2C-73.6322%2C41.8222&amp;layer=mapnik&amp;marker=41.8022%2C-73.6722"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Heritage Trust Credit Union Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-navy-900">H</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-cream-50">Heritage Trust</h3>
                  <p className="text-xs text-gold-400 tracking-widest uppercase">Credit Union</p>
                </div>
              </div>
              <p className="text-cream-100/60 max-w-md mb-6">
                Federally insured by the National Credit Union Administration. 
                Equal Housing Lender. Your savings are federally insured up to $250,000.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a 
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-400/20 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-cream-100/60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream-50 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['Personal Banking', 'Business Banking', 'Loans & Mortgages', 'Investments', 'Online Banking'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-cream-100/60 hover:text-gold-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream-50 mb-4">Legal</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Accessibility', 'Disclosures', 'Careers'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-cream-100/60 hover:text-gold-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-gold-400/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-cream-100/40 text-sm">
              © 2026 Accra Christ the King Cooperative Credit Union. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/National_Credit_Union_Administration_logo.svg/200px-National_Credit_Union_Administration_logo.svg.png" 
                alt="NCUA Insured"
                className="h-8 opacity-60"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
