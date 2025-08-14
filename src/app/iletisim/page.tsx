"use client";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Button from "../../../components/Button";
import { FadeIn } from "../../../components/FadeIn";

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Mesajınız gönderiliyor! (Bu özellik yakında aktif olacaktır.)");
  };

  return (
    <div className="bg-white text-slate-900">
      <div className="container mx-auto px-6 pt-40 pb-24 text-center overflow-hidden">
        <FadeIn>
          <div>
            <h1 className="text-5xl font-bold">Bize Ulaşın</h1>
            <p className="text-xl text-slate-600 mt-4">
              Fikrinizi bir sonraki büyük projeye dönüştürelim.
            </p>
          </div>
        </FadeIn>
      </div>
      <div className="container mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start overflow-hidden">
        <FadeIn direction="right">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">İletişim Bilgileri</h2>
              <p className="text-slate-600">
                Aşağıdaki bilgilerden veya yandaki formu doldurarak bize
                ulaşabilirsiniz. En kısa sürede size geri dönüş yapacağız.
              </p>
            </div>
            <div className="flex items-center">
              <FiMail className="w-6 h-6 mr-4 text-slate-500 flex-shrink-0" />
              <a
                href="mailto:info@sirketadi.com"
                className="text-lg hover:text-slate-600 break-all"
              >
                info@akgulerreklam.com
              </a>
            </div>
            <div className="flex items-center">
              <FiPhone className="w-6 h-6 mr-4 text-slate-500 flex-shrink-0" />
              <span className="text-lg">+90 555 123 4567</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="w-6 h-6 mr-4 text-slate-500 flex-shrink-0" />
              <span className="text-lg">
                Örnek Mah. Sanayi Sk. No:123, Ankara
              </span>
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden mt-8 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.597629224174!2d28.97579221531631!3d41.01861967930005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e894b159b9%3A0x95c82276e5d8b3a!2sGalata%20Kulesi!5e0!3m2!1str!2str!4v1675881488582!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </FadeIn>
        <FadeIn direction="left" delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 p-8 rounded-lg shadow-lg space-y-6"
          >
            <h2 className="text-3xl font-bold mb-4">Mesaj Gönderin</h2>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Adınız Soyadınız
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                E-posta Adresiniz
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition"
                required
              ></textarea>
            </div>
            <div className="text-right">
              <Button>Gönder</Button>
            </div>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
