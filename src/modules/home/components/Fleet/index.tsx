import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Whatsapp } from 'styled-icons/bootstrap';
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
      <Element
        className="flex flex-col items-center justify-between w-full pt-20 pb-16 space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10 lg:pt-28"
        name="sectionFleet"
      >
        <div className="flex flex-col w-full">
          <h1 className="text-4xl font-bold uppercase lg:text-5xl font-inter">
            Frota e Caixas estacionarias
          </h1>
          <p className="mt-8 text-lg font-inter text-[#474d57]">
            A N&N está sempre empenhada em um bom atendimento.
            <br />
            Possuimos uma frota de caminhões própria revisada semanalmente, as caçambas recebem uma
            atenção na sinalizadas conforme exigido Lei 7.620/2008, assim como com o estado de
            conservação das Caixas estacionárias.
            <br />
            Temos caixas estacionarias para entulho, caixas estacionarias fechadas para empresas,
            shoppings.
          </p>
          <a
            className="bg-[#14950f] mt-6 max-w-max py-4 px-4 rounded-lg items-center flex focus:bg-[#14950f]"
            href="https://api.whatsapp.com/send?1=ptBR&phone=5512988903512&text=Olá%20quero%20solicitar%20uma%20ca%C3%A7amba"
            target={`_blank`}
          >
            <Whatsapp width={`24px`} height={`24px`} color={`#fff`} />
            <p className="ml-2 text-sm leading-[14px] uppercase font-bold text-left text-white font-inter">
              Solicite pelo Whatsapp
            </p>
          </a>
        </div>
        <div className="relative w-full lg:w-[55%]">
          <CustomCarousel
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
              <Image src="/assets/cacamba.jpeg" layout="fill" />
            </div>
            <div className="relative w-full max-w-full h-60 lg:h-[460px] !rounded-md">
              <Image src="/assets/cacamba2.jpeg" layout="fill" />
            </div>
            <div className="relative w-full max-w-full h-60 lg:h-[460px] !rounded-md">
              <Image src="/assets/grupoCacambas.jpeg" layout="fill" />
            </div>
          </CustomCarousel>
        </div>
      </Element>
    </div>
  );
};
export default SectionFleet;

const CustomCarousel = styled(Carousel)`
  padding-bottom: 3rem;

  .custom-dot-list-style {
    bottom: 0.7rem;
  }
  .react-multi-carousel-dot {
    border: none !important;
    border-width: none !important ;
    border-color: none !important;
    outline: 0 !important;

    button {
      width: 10px;
      height: 10px;
      border: none;
      background-color: #f1bd0c !important ;
    }
  }
  .react-multi-carousel-dot--active {
    button {
      background-color: #1a202c !important ;
    }
  }
`;
