import { Clock } from 'styled-icons/bootstrap';

const AluguelDeCacambaBlog = () => {
  return (
    <div className="pt-8 lg:pt-0">
      <section className="px-6 mx-auto mb-12 max-w-7xl xl:px-4">
        <article className="box-border w-full">
          <h1 className="text-2xl leading-[140%] text-black-4 font-extrabold md:text-5xl md:leading-[48px]">
            Como alugar uma caçamba tira entulho?
          </h1>
          <p className="mt-3 text-sm text-gray-2 md:mt-3 md:mb-4 md:text-base md:leading-6">
            Publicado em 12 de junho de 2023
          </p>
          <div className="flex flex-row flex-wrap items-center space-y-4 md:space-y-0 md:flex-row">
            <div className="flex flex-wrap">
              <div className="flex items-center">
                <p className="block font-semibold leading-5 text-pink-400">Aluguel</p>
              </div>
              <div className="flex items-center">
                <p className="block font-semibold leading-5 text-pink-400">Caçamba</p>
              </div>
              <div className="flex items-center">
                <p className="block font-semibold leading-5 text-pink-400">Preço</p>
              </div>
            </div>
            <div className="flex flex-row h-4 ml-6 text-black-4">
              <Clock width={13} color={`#121826`} />
              <span className="flex ml-1 text-base leading-4">5 minutos</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full ">
            {/* <div className="w-full h-[193px] md:h-[525px] my-8 mt-12 relative max-w-4xl mx-auto">
              <Image
                src={`${IMAGE_URL}/${article?.image}/public`}
                alt={`Imagem do artigo ${article?.title}`}
                fill
                className="w-full h-auto rounded-3xl"
              />
            </div> */}
            <div className="prose lg:prose-xl prose-img:max-h-[450px] w-full mt-8">
              Se você está pensando em fazer uma obra ou reforma, provavelmente vai precisar alugar
              uma caçamba tira entulho. Esse serviço é essencial para manter o local limpo e
              organizado, além de evitar problemas com a legislação ambiental. Mas como funciona e
              quanto custa alugar uma caçamba? Neste post, vamos responder essas e outras dúvidas
              que você possa ter sobre o assunto. O que é uma caçamba tira entulho? Uma caçamba tira
              entulho é um recipiente metálico de grande capacidade, que serve para armazenar e
              transportar os resíduos gerados em uma obra ou reforma. Esses resíduos podem ser de
              diferentes tipos, como concreto, madeira, terra, papel, plástico, entre outros. A
              caçamba tira entulho é colocada em um local adequado na via pública ou no terreno da
              obra, e depois é recolhida por um caminhão especializado, que leva o entulho para um
              destino apropriado. Como alugar uma caçamba tira entulho? Para alugar uma caçamba tira
              entulho, você precisa entrar em contato com uma empresa especializada nesse serviço,
              que tenha autorização da prefeitura e do órgão ambiental para operar. Você deve
              informar o endereço da obra, o tipo e a quantidade de entulho que será gerado, e o
              período que você vai precisar da caçamba. A empresa vai verificar a disponibilidade e
              o valor do aluguel, e vai agendar a entrega e a retirada da caçamba no local
              combinado. Quanto custa alugar uma caçamba tira entulho? O custo do aluguel de uma
              caçamba tira entulho pode variar de acordo com a região, a empresa, o tamanho da
              caçamba, o tipo de entulho e o tempo de permanência. Em média, o valor do aluguel de
              uma caçamba estacionária é de R$ 320 por um período de um a três dias úteis. Se você
              precisar da caçamba por mais tempo ou se ultrapassar a capacidade máxima da caçamba
              (10 centímetros acima da borda), você pode pagar multas adicionais. Quais são os
              cuidados ao alugar uma caçamba tira entulho? Alguns cuidados são importantes ao alugar
              uma caçamba tira entulho, como: - Separar os resíduos por tipo e destinar corretamente
              os materiais recicláveis ou reutilizáveis; - Não colocar na caçamba materiais
              perigosos ou proibidos, como lixo orgânico, pneus, lâmpadas, pilhas, baterias, óleo,
              entre outros; - Não encher a caçamba além do limite permitido; - Não obstruir o
              trânsito ou a calçada com a caçamba; - Respeitar as normas da prefeitura e do órgão
              ambiental sobre a colocação e a retirada da caçamba; - Escolher uma empresa confiável
              e legalizada para alugar a caçamba. Alugar uma caçamba tira entulho é uma forma
              prática e responsável de lidar com os resíduos de uma obra ou reforma. Esperamos que
              este post tenha esclarecido as suas dúvidas sobre o assunto. Se você gostou deste
              conteúdo, compartilhe com os seus amigos nas redes sociais!
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default AluguelDeCacambaBlog;
