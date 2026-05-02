"use client"
import Image from 'next/image';
import { useState } from "react"
import { Github, Mail, ExternalLink, Menu, X, GraduationCap, Phone, User } from "lucide-react"

const navItems = [
  { name: "Hakkımda", href: "#about" },
  { name: "Yetkinlikler", href: "#skills" },
  { name: "Projeler", href: "#projects" },
  { name: "İletişim", href: "#contact" },
]

const skills = [
  { name: "Java", level: "Orta" },
  { name: "Python", level: "Orta" },
  { name: "C", level: "Orta" },
  { name: "C++", level: "Orta" },
  { name: "Flutter", level: "Orta-Az" },
]

const tools = [
  "GitHub",
  "Android Studio",
  "VS Code",
  "IntelliJ IDEA",
  "Code::Blocks",
]

const projects = [
  {
    title: "TÜBİTAK Projesi - Mobil Uygulama",
    description: "Okulumuzun İEEE kulübü bünyesinde bir TÜBİTAK projesi geliştiriyoruz. Projemizde, okul öncesi çocuklara yönelik yapay zeka destekli ve uyarlanabilir bir öğrenme uygulaması olarak geliştirilen yenilikçi bir proje önerisidir.Flutter ile geliştirilen cross-platform mobil uygulama. Yapay zeka ve makine öğrenmesi teknolojileri kullanılarak geliştirilen yenilikçi bir çözüm. Modern UI/UX tasarım prensipleri ile kullanıcı dostu arayüz. Ekip projesi olup bu projede backend ve frontendi bağlama görevi benim sorumluluğumdadır.",
   images: [
  "/portfolyo__/tubitak-proje1.png",
"/portfolyo__/tubitak-proje2.png",
"/portfolyo__/tubitak-proje3.png",
"/portfolyo__/tubitak-proje4.png",
],
    tags: ["Flutter", "Dart", "Python", "Machine Learning", "Firebase"],
    featured: true,
  },
  {
    title: "Akciğer Filmi Analizi",
    description: "Yapay zeka alanındaki çalışmalarım kapsamında, akciğer röntgen görüntülerinin analizi üzerine bir makine öğrenmesi pipeline'ı geliştirmekteyim. Python tabanlı bu projede veri ön işleme, özellik mühendisliği ve hiperparametre optimizasyonu süreçleri titizlikle yürütülmektedir. Sınıflandırma ve tahminleme adımları, çapraz doğrulama ve hata metrikleri ile doğrulanarak modelin performans optimizasyonu sağlanmaktadır. Geliştirme süreci aktif olarak devam etmekte olup, tüm algoritmik tasarım ve kodlama süreçleri şahsıma aittir.",
    images: [],
    tags: ["Python", "Machine Learning", "Data Preprocessing", "Optimization"],
    featured: false,
  },
]

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-primary">
              Portfolyo
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-medium mb-2">Merhaba,</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Bilgisayar Mühendisliği Öğrencisi
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Eylül Naz Yemişken, 2. sınıf öğrencisiyim. Yazılım geliştirme,mobil uygulama geliştirme ve yapay zeka alanlarında kendimi geliştiriyorum. IEEE Klübü bünyesinde TÜBİTAK projesinde aktif olarak çalışıyorum. Öğrenmeye açık, meraklı ve teknik becerilerini geliştirmeye istekli biriyim.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                İletişime Geç
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Projeleri Gör
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card/50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-2">Hakkımda</h2>
          <div className="w-16 h-1 bg-primary mb-8" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bilgisayar mühendisliği 2. sınıf öğrencisi olarak, yazılım geliştirme 
                dünyasına olan tutkumla projeler üretiyorum. Üniversite eğitimim 
                süresince ilgi duyduğum alanlarda çalışmalar yaparak bilgi sahibi olmaya çalışıyorum. IEEE Klübü bünyesinde TÜBİTAK projesinde aktif olarak yer alarak, 
                akademik araştırma ve pratik uygulama arasında köprü kurmaya çalışıyorum.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kendi projelerimi üretmenin yanı sıra çok yönlü bir yaşam tarzını benimsiyorum. Kendi çapımda ukulele çalmaya çalışıyorum. Boş zamanlarımda müze gezmeyi severim. Botaniğe karşı bir ilgim var, özellikle soğanlı bitki bakmak daha çok hoşuma gider. Rahatlamak amaçlı ve fiziksel dayanıklılığı da geliştirmek için yogayla uğraşıyorum.
              </p>
            </div>
            <div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <GraduationCap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Eğitim</h3>
                <p className="text-primary font-medium">İstanbul Sağlık ve Teknoloji Üniversitesi</p>
                <p className="text-muted-foreground">Bilgisayar Mühendisliği - 2. Sınıf</p>
                <p className="text-sm text-muted-foreground mt-2">2024 - 2028 (Tahmini)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-2">Yetkinlikler</h2>
          <div className="w-16 h-1 bg-primary mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.level}</p>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <h3 className="text-2xl font-bold text-foreground mt-12 mb-2">Araçlar ve Teknolojiler</h3>
          <div className="w-12 h-1 bg-primary mb-6" />
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-card/50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-2">Projeler</h2>
          <div className="w-16 h-1 bg-primary mb-8" />
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Görsel dizisi varsa göster, yoksa gösterme (görselsiz proje için) */}
                {project.images && project.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {project.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="w-full">
                        <img
                          src={img}
                          alt={`${project.title} Fotoğraf ${imgIndex + 1}`}
                          className="w-full aspect-[9/16] max-h-[300px] md:max-h-[350px] rounded-lg border border-border/50 object-contain shadow-sm bg-card"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-2">İletişim</h2>
          <div className="w-16 h-1 bg-primary mb-8" />
          <div className="max-w-md">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 text-foreground">
                <User size={20} className="text-primary" />
                <span className="font-medium">Eylül Naz Yemişken</span>
              </div>
              <a
                href="mailto:eylulyemisken@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span>eylulyemisken@gmail.com</span>
              </a>
              <a
                href="tel:+905516521979"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={20} />
                <span>0551 652 19 79</span>
              </a>
              <a
                href="https://github.com/eylulnaz607"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
                <span>github.com/eylulnaz607</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Eylül Naz Yemişken. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/eylulnaz607"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:eylulyemisken@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}