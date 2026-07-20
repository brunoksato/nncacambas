import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CallToAction from '@global-components/CallToAction';
import Image from '@global-components/Image';

const SectionCompany = () => {
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
    <div className="w-full max-w-screen-xl px-4 pb-12 mx-auto lg:px-0">
      <div
        className="flex flex-col items-center py-8 space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row"
        id="sectionCompany"
      >
        <div className="w-full">
          <h2 className="text-4xl font-bold uppercase lg:text-5xl font-inter">
            N&N locação de caçambas, aluguel de caçambas e caminhões
          </h2>
          <p className="w-full mt-8 text-lg font-inter text-[#474d57]">
            Consolidada em 2007, a N&N atende empresas, obras residenciais e reformas com locação de
            caçambas e caminhões. A empresa mantém o cadastro 19 na Urbam, frota própria revisada e
            destinação dos resíduos em usinas credenciadas, com documentação do descarte. O
            atendimento cobre São José dos Campos e Jacareí. A sede operacional fica em Jacareí,
            onde a N&N opera desde 2012.
          </p>
          <CallToAction placement="empresa_home" />
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
            arrows
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="relative w-full max-w-full h-60 lg:h-[460px]">
              <Image src="/assets/caminhao.webp" layout="fill" alt="Caminhão com Caçamba" />
            </div>
            <div className="relative w-full max-w-full h-60 lg:h-[460px]">
              <Image src="/assets/caminhao2.webp" layout="fill" alt="Caminhão com Caçambas" />
            </div>
            <div className="relative w-full max-w-full h-60 lg:h-[460px]">
              <Image src="/assets/caminhao3.webp" layout="fill" alt="Caminhões com Caçambas" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default SectionCompany;
