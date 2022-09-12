import Image from '@global-components/Image';
import useMediaQuery from '@global-hooks/useMediaQuery';

const SectionMap = () => {
  const isMobile = useMediaQuery(768);
  return (
    <div className="relative max-w-screen-xl px-4 mx-auto lg:px-0" id="sectionMap">
      <p className="font-medium uppercase lg:ml-0 font-inter">Cidades que Atendemos:</p>
      <div className="relative mt-8 max-w-screen-xl h-[420px] lg:h-[460px]">
        <Image
          src={isMobile ? `/assets/nnMapaMobile.png` : `/assets/nnMapaDesktop.png`}
          layout="fill"
          alt="Mapa com cidades que atendemos"
        />
      </div>
    </div>
  );
};
export default SectionMap;
