import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Element } from 'react-scroll';
import styled from 'styled-components';
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
    <div>
      <Element className="flex items-center justify-between w-full pt-28" name="sectionFleet">
        <div className="relative w-[55%]">
          <CustomCarousel
            swipeable
            draggable
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={6000}
            keyBoardControl={true}
            arrows={false}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="relative w-full max-w-full h-[460px]">
              <Image src="/assets/cacamba.jpeg" layout="fill" />
            </div>
            <div className="relative w-full max-w-full h-[460px]">
              <Image src="/assets/cacamba2.jpeg" layout="fill" />
            </div>
            <div className="relative w-full max-w-full h-[460px]">
              <Image src="/assets/grupoCacambas.jpeg" layout="fill" />
            </div>
          </CustomCarousel>
        </div>
        <div className="w-1/2 text-right">
          <h4 className="text-5xl font-bold uppercase font-roboto">Frota e Caixas estacionarias</h4>
          <p className="mt-8 text-lg pl-14 font-roboto">
            A N&N está sempre empenhada em um bom atendimento.
            <br />
            Possuimos uma frota de caminhões própria revisada semanalmente, as caçambas recebem uma
            atenção na sinalizadas conforme exigido Lei 7.620/2008, assim como com o estado de
            conservação das Caixas estacionárias.
            <br />
            Temos caixas estacionarias para entulho, caixas estacionarias fechadas para empresas,
            shoppings.
          </p>
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
