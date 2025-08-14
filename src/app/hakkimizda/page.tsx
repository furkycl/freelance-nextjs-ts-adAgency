import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Şirket Adı",
  description: "Hikayemizi, vizyonumuzu ve yaratıcı ekibimizi tanıyın.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop"
          alt="Ofiste çalışan bir ekip"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="absolute inset-0 bg-slate-900 opacity-60 -z-10"></div>
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Biz Kimiz?</h1>
          <p className="text-xl mt-4">Tasarımın gücüne inanan bir ekibiz.</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Hikayemiz</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Her şey basit bir fikirle başladı: Markaların hikayelerini en
              yaratıcı ve etkili şekilde anlatmak. Yıllar içinde büyüyen
              tutkumuz, bizi sektörde fark yaratan işlere imza atan bir ajansa
              dönüştürdü.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Müşterilerimizin hedeflerini kendi hedeflerimiz olarak benimsiyor,
              her projeye aynı heyecan ve özenle yaklaşıyoruz.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-full mr-4">💡</div>
              <div>
                <h3 className="text-xl font-bold">Yaratıcılık</h3>
                <p className="text-slate-500">
                  Sıradan olanla yetinmiyor, her zaman yenilikçi ve özgün
                  çözümler üretiyoruz.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-full mr-4">🎯</div>
              <div>
                <h3 className="text-xl font-bold">Strateji</h3>
                <p className="text-slate-500">
                  Tasarım kararlarımızı estetik kaygıların ötesinde, stratejik
                  hedeflere dayandırıyoruz.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-full mr-4">🤝</div>
              <div>
                <h3 className="text-xl font-bold">İşbirliği</h3>
                <p className="text-slate-500">
                  Müşterilerimizle şeffaf ve yakın bir işbirliği içinde
                  çalışarak en iyi sonuçları elde ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
