import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from '@global-components/Image';

const SectionFleet = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="w-full max-w-screen-xl px-4 mx-auto lg:px-0">
      <div
        className="flex flex-col justify-between w-full pt-20 pb-16 space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10 lg:pt-28"
        id="sectionFleet"
      >
        <div className="flex flex-col w-full">
          <h1 className="font-sans text-4xl font-bold uppercase lg:text-5xl">
            Aluguel de caçambas e caminhões
          </h1>
          <p className="mt-8 text-lg font-sans text-[#474d57]">
            A N&N Locação de caçambas está sempre empenhada em um bom atendimento.
            <br />
            Possuimos uma frota de caminhões própria revisada semanalmente, as caçambas recebem uma
            atenção na sinalizadas conforme exigido Lei 7.620/2008, assim como com o estado de
            conservação das Caixas estacionárias.
            <br />
            Temos caixas estacionarias para entulho, caixas estacionarias fechadas para empresas,
            shoppings.
          </p>
          <button
            className="bg-[#14950f] mt-6 lg:mt-20 max-w-max py-4 px-4 rounded-lg items-center flex focus:!bg-[#14950f] active:!bg-[#14950f]"
            onClick={() => {
              if (window && window.gtag) {
                window.gtag(`event`, `conversion`, {
                  send_to: `AW-11103703335/Z0u8CLuJ6KkYEKei1K4p`,
                });
              }

              window.open(
                `https://api.whatsapp.com/send?1=ptBR&phone=5512996611332&text=Olá%20quero%20solicitar%20uma%20ca%C3%A7amba`,
                `_blank`,
              );
            }}
          >
            <svg
              viewBox="0 0 16 16"
              height="24px"
              width="24px"
              aria-hidden="true"
              focusable="false"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              color="#fff"
              className="StyledIconBase-ea9ulj-0 VtuNT"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
            </svg>
            <p className="ml-2 text-sm leading-[14px] uppercase font-bold text-left text-white font-inter">
              Solicite orçamento pelo Whatsapp
            </p>
          </button>
        </div>
        <div className="relative w-full lg:w-[55%]">
          <Carousel
            swipeable
            draggable
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={6000}
            keyBoardControl={true}
            arrows={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="relative w-full max-w-full h-60 lg:h-[460px] !rounded-md">
              <Image src="/assets/cacamba.webp" layout="fill" alt="Caçamba Vazia" priority />
            </div>
            <div className="relative w-full max-w-full h-60 lg:h-[460px] !rounded-md">
              <Image
                src="/assets/cacamba2.webp"
                layout="fill"
                alt="Caixas Estacionarias Com Tampa"
              />
            </div>
            <div className="relative w-full max-w-full h-60 lg:h-[460px] !rounded-md">
              <Image src="/assets/grupoCacambas.webp" layout="fill" alt="Conjunto de Caçambas" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default SectionFleet;
