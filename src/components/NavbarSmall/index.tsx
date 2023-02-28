import { useState } from 'react';
import Image from '@global-components/Image';

const NavbarSmall = () => {
  const [isOpenMenuDrawer, setIsOpenMenuDrawer] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="w-full bg-[#fcd535] py-4 z-[9999] fixed">
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between w-full px-8 xl:w-36 xl:px-0">
            <div className="relative w-full max-w-[80px] h-[44px] xl:max-w-[100px] xl:h-[60px]">
              <Image
                src={`/assets/nnLogo.webp`}
                layout={`fill`}
                alt="Aluguel de caçambas na N&N Caçambas"
              />
            </div>
            <div className="block xl:hidden">
              <svg
                viewBox="0 0 24 24"
                height="30px"
                width="30px"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                color="#404040"
                className="block StyledIconBase-ea9ulj-0 VtuNT xl:hidden"
                onClick={() => setIsOpenMenuDrawer(!isOpenMenuDrawer)}
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            </div>
          </div>

          <div className="items-center hidden space-x-8 text-[#404040] uppercase xl:flex">
            <a className="font-bold cursor-pointer uLinkpercase font-inter" href="#sectionCompany">
              Empresa
            </a>
            <a className="font-bold uppercase cursor-pointer font-inter" href="#sectionFleet">
              Frota
            </a>
            <a className="font-bold uppercase cursor-pointer font-inter" href="#sectionMap">
              Cidades
            </a>
            <a className="font-bold uppercase cursor-pointer font-inter" href="#sectionDiscards">
              Descartes
            </a>
            <a
              className="font-bold text-center uppercase cursor-pointer font-inter"
              href="#sectionRestrictedTimeAndPlace"
            >
              Horários e <br />
              Locais Restritos
            </a>
            <a
              className="font-bold text-center uppercase cursor-pointer font-inter"
              href="#sectionOrientation"
            >
              Orientações <br />
              ao Gerador
            </a>
            {/* <a
              className="font-bold text-center uppercase cursor-pointer font-inter"
              href="#contact"
            >
              Endereços
            </a> */}
          </div>
        </div>
      </div>

      {/* MenuDrawerMobile */}
      <div
        className="fixed z-[9999] w-screen h-screen left-[-100vw] ease-in-out duration-500 font-inter bg-[#fff] pt-8"
        style={isOpenMenuDrawer === true ? { left: 0 } : { left: `-100vw` }}
      >
        <div className="relative ml-4 w-full max-w-[80px] h-[44px]">
          <Image src={`/assets/nnLogo.webp`} layout={`fill`} alt="N&N caçambas Logo" />
        </div>
        <svg
          viewBox="0 0 24 24"
          height="30px"
          width="30px"
          aria-hidden="true"
          focusable="false"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute StyledIconBase-ea9ulj-0 VtuNT right-4 top-8"
          onClick={() => setIsOpenMenuDrawer(false)}
        >
          <g data-name="Layer 2">
            <path
              d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z"
              data-name="close"
            ></path>
          </g>
        </svg>
        <div className="relative w-full h-full">
          <div className="flex flex-col items-start mt-0 space-y-4 text-[#404040]">
            <a
              className="flex items-center justify-between w-full px-4 pb-2 mt-16 border-b border-gray-500 border-solid"
              href="#sectionCompany"
              onClick={() => setIsOpenMenuDrawer(false)}
            >
              <p className="text-2xl font-bold uppercase cursor-pointer font-inter ">Empresa</p>
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="StyledIconBase-ea9ulj-0 VtuNT max-w-[40px] h-[40px] w-full"
              >
                <path d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"></path>
              </svg>
            </a>
            <a
              className="flex items-center justify-between w-full px-4 pb-2 border-b border-gray-500 border-solid mt-14"
              href="#sectionFleet"
              onClick={() => setIsOpenMenuDrawer(false)}
            >
              <p className="w-full text-2xl font-bold uppercase cursor-pointer font-inter">Frota</p>
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="StyledIconBase-ea9ulj-0 VtuNT max-w-[40px] h-[40px] w-full"
              >
                <path d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"></path>
              </svg>
            </a>
            <a
              className="flex items-center justify-between w-full px-4 pb-2 border-b border-gray-500 border-solid mt-14"
              href="#sectionMap"
              onClick={() => setIsOpenMenuDrawer(false)}
            >
              <p className="w-full text-2xl font-bold uppercase cursor-pointer font-inter">
                Cidades
              </p>
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="StyledIconBase-ea9ulj-0 VtuNT max-w-[40px] h-[40px] w-full"
              >
                <path d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"></path>
              </svg>
            </a>
            <a
              className="flex items-center justify-between w-full px-4 pb-2 border-b border-gray-500 border-solid mt-14"
              href="#sectionDiscards"
              onClick={() => setIsOpenMenuDrawer(false)}
            >
              <p className="w-full text-2xl font-bold uppercase cursor-pointer font-inter">
                Descartes
              </p>
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="StyledIconBase-ea9ulj-0 VtuNT max-w-[40px] h-[40px] w-full"
              >
                <path d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"></path>
              </svg>
            </a>
            <a
              className="flex items-center justify-between w-full px-4 pb-2 border-b border-gray-500 border-solid mt-14"
              href="#sectionRestrictedTimeAndPlace"
              onClick={() => setIsOpenMenuDrawer(false)}
            >
              <p className="w-full text-2xl font-bold uppercase cursor-pointer text-start font-inter">
                Horários e <br />
                Locais Restritos
              </p>
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="StyledIconBase-ea9ulj-0 VtuNT max-w-[40px] h-[40px] w-full"
              >
                <path d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"></path>
              </svg>
            </a>
            <a
              className="flex items-center justify-between w-full px-4 pb-2 mt-14"
              href="#sectionOrientation"
              onClick={() => setIsOpenMenuDrawer(false)}
            >
              <p className="w-full text-2xl font-bold uppercase cursor-pointer text-start font-inter">
                Orientações <br />
                ao Gerador
              </p>
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="StyledIconBase-ea9ulj-0 VtuNT max-w-[40px] h-[40px] w-full"
              >
                <path d="M11 10L7.859 6.58a.695.695 0 010-.978.68.68 0 01.969 0l3.83 3.908a.697.697 0 010 .979l-3.83 3.908a.68.68 0 01-.969 0 .695.695 0 010-.978L11 10z"></path>
              </svg>
            </a>
          </div>
          <div className="flex px-4 w-max">
            <a
              className="bg-[#14950f] mb-12 w-full py-4 px-4 rounded-lg mt-8 items-center flex focus:bg-[#14950f]"
              href="https://api.whatsapp.com/send?1=ptBR&phone=5512988903512&text=Olá%20quero%20solicitar%20uma%20ca%C3%A7amba"
              target={`_blank`}
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
              <p className="ml-2 text-xl font-medium text-left text-white font-inter">
                Solicite pelo Whatsapp
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarSmall;
