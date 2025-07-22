const contentTR = {
  // Header Content
  home: "Ana Sayfa",
  skills: "Beceriler", // Bu ana navigasyon başlığı için 'Beceriler' kalacak
  projects: "Projeler",
  contact: "İletişim",
  letConnect: "Bağlantı Kuralım",

  // Hero Section Content (Ana Sayfa)
  welcome: "Merhaba! ",
  greeting: "Ben Zeynep Nur Karabay<br />Yazılım Geliştiricisiyim",
  about: "Tam burslu olarak Çankaya Üniversitesi’nde İngilizce Matematik ve Yazılım Mühendisliği eğitimi alıyorum. Analitik düşünme yeteneğimi yazılımla birleştirerek yenilikçi ve işlevsel çözümler üretmeye odaklanıyorum.",
  downloadCV: "CV İndir",
  // Skills Section Content
  skillsTitle: "Becerilerim", // Ana Skills bölüm başlığı için eklendi
  programmingSkillsTitle: "Programlama Becerileri",
  programmingSkills: [
    { name: "MATLAB", description: "" },
    { name: "C", description: "" },
    { name: "C++", description: "" },
    { name: "Julia", description: "" },
    { name: "Java", description: "" },
    { name: "Python", description: "" },
    { name: "LaTeX", description: "" },
    { name: "React", description: "" },
    { name: "PostgreSQL", description: "" }
  ],
  technicalSkillsTitle: "Teknik Beceriler",
  technicalSkills: [
    { name: "SRS", description: "" },
    { name: "Yazılım Tasarımı", description: "" },
    { name: "Veri Analizi", description: "" },
    { name: "Bilimsel Hesaplama", description: "" },
    { name: "Matematiksel Modelleme", description: "" },
    { name: "Kullanım Durumu Diyagramı", description: "" },
    { name: "Nesne Yönelimli Programlama", description: "" },
    { name: "Fark Denklemleri", description: "" },
    { name: "SpringBoot", description: "" },
    { name: "Etkinlik Diyagramı", description: "" },
    { name: "Sıralı Diyagram", description: "" },
    { name: "Veri Modeli", description: "" },
    { name: "Sınıf Diyagramı", description: "" },
    { name: "Nesne Diyagramı", description: "" },
    { name: "Durum Diyagramı", description: "" },
    { name: "Yazılım Mimarisi", description: "" },
    { name: "Microsoft Office Programları", description: "" },
  ],
  certificationsTitle: "Sertifikalar",
  certifications: [
    { name: "Google Dijital Pazarlama (Google)", description: "" },
    { name: "A1 Korece Yeterlilik (IIENSTITU)", description: "" },
    { name: "Veri Analizi İçin Başlangıç İstatistiği (Udemy)", description: "" }
  ],
  languagesTitle: "Diller", // Diller başlığı eklendi
  languages: [
    { name: "İleri derece İngilizce", description: "" },
    { name: "Başlangıç İtalyanca", description: "" },
    { name: "Başlangıç Korece", description: "" },
    { name: "Başlangıç Rusça", description: "" }
  ],

  // Projects Section Content
  projectsTitle: "Projeler",
  universityProjectsTitle: "Üniversite Projeleri",
  mainProjects: [
    {
      title: "Mezuniyet Projesi İçin Denetimli Öğrenme Yöntemlerinin Matematiksel Temelleri ve Hastalık Modelleme Uygulamaları",
      year: "2025",
      description: "Bu proje, denetimli öğrenmenin matematiksel prensiplerine ve hastalık modellemesindeki uygulamalarına odaklanmaktadır."
    },
    {
      title: "Makine Öğrenimi Yöntemleri ile Meme Kanseri Teşhis Uygulaması",
      year: "2025",
      description: "Çeşitli makine öğrenimi teknikleri kullanılarak meme kanseri teşhisi için geliştirilmiş bir uygulama."
    }
  ],
  otherUniversityProjects: [
    "Çankaya Üniversitesi Uzak Doğu Dilleri ve Kültürleri Topluluğu finans ve sponsorluk ekibi üyesi (2023-2024)."
  ],

  // Experience Section Content
  experienceTitle: "İş Deneyimi",
  experience: [
    {
      title: "Stajyer",
      company: "Bilgi Teknolojileri ve İletişim Kurumu (BTK)",
      location: "Ankara, Türkiye",
      dates: "Haziran 2025 - Temmuz 2025",
      description: "Profesyonel bir ortamda yazılım geliştirme konusunda uygulamalı deneyim kazandım. Çağrı Merkezi Projesi'ne aktif olarak katkıda bulundum."
    },
    {
      title: "Kişisel Sosyal Medya Uzmanı",
      location: "Uzaktan",
      dates: "Nisan 2023 - Mart 2024",
      description: "Kişisel sosyal medya hesaplarını yönettim, içerik oluşturma, kitle etkileşimi ve dijital stratejiye odaklandım."
    }
  ],

  // Contact Section Content
  contactTitle: "Bana Ulaşın",
  contactNameLabel: "Adınız",
  contactEmailLabel: "E-postanız",
  contactMessageLabel: "Mesajınız",
  contactSendButton: "Mesaj Gönder",
  contactInfo: {
    address: "Ankara, Türkiye",
    email: "karabayzeynepnur@gmail.com"
  },

  // Footer Content
  footerText: `© ${new Date().getFullYear()} Zeynep Nur Karabay. Tüm hakları saklıdır.`
};

export default contentTR;