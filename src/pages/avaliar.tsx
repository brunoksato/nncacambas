import { useEffect } from 'react';
import Head from 'next/head';

const GOOGLE_REVIEW_URL = `https://g.page/r/Caw77fgukVTOEBM/review`;

export default function Avaliar() {
  useEffect(() => {
    window.location.replace(GOOGLE_REVIEW_URL);
  }, []);

  return (
    <>
      <Head>
        <title>Avalie a N&N Caçambas no Google</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-[#fcd535] px-4 text-[#151719]">
        <div className="max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="text-3xl font-extrabold">Avalie a N&N Caçambas</h1>
          <p className="mt-4 leading-7 text-[#5b6165]">
            Estamos abrindo o formulário oficial de avaliação no Google.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            className="mt-6 inline-flex rounded-lg bg-[#14950f] px-5 py-4 font-extrabold text-white"
          >
            Continuar para o Google
          </a>
        </div>
      </main>
    </>
  );
}

Avaliar.Layout = ({ children }) => <>{children}</>;
