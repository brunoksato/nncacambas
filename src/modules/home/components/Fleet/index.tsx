import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CallToAction from '@global-components/CallToAction';
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
          <CallToAction />
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
