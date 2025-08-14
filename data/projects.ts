export interface Project {
  slug: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
  gallery: string[];
}

export const projectsData: Project[] = [
  {
    slug: "marka-kimligi-projesi",
    title: "Marka Kimliği Projesi",
    category: "Tasarım & Strateji",
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
    videoUrl: "/videos/project-branding.mp4",
    description:
      "Müşterimiz için sıfırdan oluşturduğumuz bu marka kimliği, şirketin vizyonunu ve değerlerini yansıtan modern ve dinamik bir yaklaşıma sahiptir. Logo tasarımından renk paletine kadar her detay özenle düşünüldü.",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-38a4a5b48710?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
    ],
  },
  {
    slug: "billboard-kampanyasi",
    title: "Billboard Kampanyası",
    category: "Açıkhava Reklamcılığı",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
    videoUrl: "/videos/project-branding.mp4",
    description:
      "Şehrin en işlek noktalarında yer alan bu billboard kampanyası, hedef kitle üzerinde anında etki yaratmak üzere tasarlandı. Cesur tipografi ve canlı görsellerle dikkat çekmeyi başardık.",
    gallery: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
      "https://images.unsplash.com/photo-1604933241242-eb41a5403a3a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
    ],
  },
  {
    slug: "dijital-urun-lansmani",
    title: "Dijital Ürün Lansmanı",
    category: "Web & Mobil Tasarım",
    imageUrl:
      "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
    videoUrl: "/videos/project-branding.mp4",
    description:
      "Yeni bir mobil uygulamanın lansmanı için kullanıcı dostu bir web sitesi ve tanıtım materyalleri hazırladık. Kullanıcı deneyimini ön planda tutarak dönüşüm oranlarını maksimize ettik.",
    gallery: [
      "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
      "https://images.unsplash.com/photo-1559028006-448665bd7c24?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
    ],
  },
];
