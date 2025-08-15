import Link from "next/link";
import Button from "../../components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-slate-900 text-center px-4">
      <h1 className="text-8xl font-black text-slate-200">404</h1>
      <h2 className="text-3xl font-bold mt-2">Sayfa Bulunamadı</h2>
      <p className="text-slate-600 mt-4 max-w-md">
        Aradığınız sayfayı bulamadık. Silinmiş veya yanlış yazılmış olabilir.
        Endişelenmeyin, sizi tekrar yola sokabiliriz.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button>Anasayfaya Dön</Button>
        </Link>
      </div>
    </div>
  );
}
