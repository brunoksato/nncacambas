import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Whatsapp } from 'styled-icons/bootstrap';
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
    <div className="w-full max-w-screen-xl mx-auto">
      <Element className="flex items-center py-8 space-x-10" name="sectionCompany">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold uppercase font-inter">
            n&n locação <br /> de caçambas e caminhões
          </h1>
          <p className="w-full mt-8 text-lg font-inter">
            A empresa passou por varias formatos, consolidando em 2007, desde então vem atendendo,
            grandes, medias, pequenas empresas, e obras residenciais, com serviços de Locação de
            caçambas, e de Caminhões, zelando no atendimento de qualidade e as boas práticas de
            sustentabilidade, respeitando as leis ambientais. A N&N Locações é uma empresa em
            conformidade com decreto, sob o número de cadastro 19 na Urbam, nosso material é
            destinado aos aterros credenciados, a retirada do entulho é feita com total
            responsabilidade e preocupação com o meio ambiente.
          </p>
          <a
            className="bg-[#14950f] mt-4 max-w-max py-4 px-4 rounded-lg items-center flex focus:bg-[#14950f]"
            href="https://api.whatsapp.com/send?1=ptBR&phone=5512988903512&text=Olá%20quero%20solicitar%20uma%20ca%C3%A7amba"
            target={`_blank`}
          >
            <Whatsapp width={`24px`} height={`24px`} color={`#fff`} />
            <p className="ml-2 text-sm leading-[14px] uppercase font-bold text-left text-white font-inter">
              Solicite pelo Whatsapp
            </p>
          </a>
        </div>
        <div className="relative w-[55%]">
          <CustomCarousel
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
            <div className="relative w-full max-w-full h-[460px]">
              <Image src="/assets/caminhao1.jpeg" layout="fill" />
            </div>
            <div className="relative w-full max-w-full h-[460px]">
              <Image src="/assets/caminhao2.jpeg" layout="fill" />
            </div>
            <div className="relative w-full max-w-full h-[460px]">
              <Image src="/assets/caminhao3.jpeg" layout="fill" />
            </div>
          </CustomCarousel>
        </div>
      </Element>
    </div>
  );
};
export default SectionCompany;

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
