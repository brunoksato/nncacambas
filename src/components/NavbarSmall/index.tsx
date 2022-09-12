import { useState } from 'react';
import { ChevronSmallRight } from '@styled-icons/entypo/ChevronSmallRight';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
// import styled from 'styled-components';
import { Link } from 'react-scroll';
import { ClockHistory, Whatsapp } from 'styled-icons/bootstrap';
import { Menu } from 'styled-icons/material-sharp';
import Image from '@global-components/Image';

const NavbarSmall = () => {
  const [isOpenMenuDrawer, setIsOpenMenuDrawer] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="w-full bg-[#fcd535] py-4 z-[9999] fixed">
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between w-full px-8 xl:w-36 xl:px-0">
            <div className="relative w-full max-w-[80px] h-[44px] xl:max-w-[100px] xl:h-[60px]">
              <Image src={`/assets/nnCacambasLogo.png`} layout={`fill`} />
            </div>
            <div className="block xl:hidden">
              <Menu
                width={`30px`}
                height={`30px`}
                color="#fff"
                className="block xl:hidden"
                onClick={() => setIsOpenMenuDrawer(!isOpenMenuDrawer)}
              />
            </div>
          </div>

          <div className="items-center hidden space-x-8 text-[#404040] uppercase xl:flex">
            <Link
              className="font-bold cursor-pointer uLinkpercase font-inter"
              to={`sectionCompany`}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={250}
            >
              Empresa
            </Link>
            <Link
              className="font-bold uppercase cursor-pointer font-inter"
              to={`sectionFleet`}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={250}
            >
              Frota
            </Link>
            <Link
              className="font-bold uppercase cursor-pointer font-inter"
              to={`sectionMap`}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={250}
            >
              Cidades
            </Link>
            <Link
              className="font-bold uppercase cursor-pointer font-inter"
              to={`sectionDiscards`}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={250}
            >
              Descartes
            </Link>
            <Link
              className="font-bold text-center uppercase cursor-pointer font-inter"
              to={`sectionRestrictedTimeAndPlace`}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={250}
            >
              Horários e <br />
              Locais Restritos
            </Link>
            <Link
              className="font-bold text-center uppercase cursor-pointer font-inter"
              to={`sectionOrientation`}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={250}
            >
              Orientações <br />
              ao Gerador
            </Link>
            {/* <a
              className="bg-[#14950f] py-2 px-4 rounded-lg items-center flex focus:bg-[#14950f]"
              href="https://api.whatsapp.com/send?1=ptBR&phone=5512988903512&text=Olá%20quero%20solicitar%20uma%20ca%C3%A7amba"
              target={`_blank`}
            >
              <Whatsapp width={`24px`} height={`24px`} color={`#fff`} />
              <p className="ml-2 text-sm leading-[14px] font-medium text-left text-white font-inter">
                Solicite pelo <br /> Whatsapp
              </p>
            </a> */}
          </div>
        </div>
      </div>

      {/* MenuDrawerMobile */}
      <div
        className="absolute w-screen h-screen left-[-100vw] overflow-auto ease-in-out duration-1000 bg-[#e2e8f0]"
        style={isOpenMenuDrawer === true ? { left: 0 } : { left: `-100vw` }}
      >
        <div className="relative w-full h-full">
          <CloseOutline
            width={`30px`}
            height={`30px`}
            className="absolute right-4 top-4"
            onClick={() => setIsOpenMenuDrawer(false)}
          />
          <div className="flex flex-col items-start mt-0 space-y-4">
            <div className="flex items-center justify-between w-full px-4 pb-2 mt-16 border-b border-gray-500 border-solid">
              <p className="text-3xl font-bold uppercase cursor-pointer font-inter ">Empresa</p>
              <ChevronSmallRight className="max-w-[40px] h-[40px] w-full" />
            </div>
            <div className="flex items-center justify-between w-full px-4 pb-2 border-b border-gray-500 border-solid mt-14">
              <p className="w-full text-3xl font-bold uppercase cursor-pointer font-inter">Frota</p>
              <ChevronSmallRight className="max-w-[40px] h-[40px] w-full" />
            </div>
            <div className="flex items-center justify-between w-full px-4 pb-2 border-b border-gray-500 border-solid mt-14">
              <p className="w-full text-3xl font-bold uppercase cursor-pointer font-inter">
                Cidades
              </p>
              <ChevronSmallRight className="max-w-[40px] h-[40px] w-full" />
            </div>
            <div className="flex items-center justify-between w-full px-4 pb-2 border-b border-gray-500 border-solid mt-14">
              <p className="w-full text-3xl font-bold uppercase cursor-pointer font-inter">
                Descartes
              </p>
              <ChevronSmallRight className="max-w-[40px] h-[40px] w-full" />
            </div>
            <div className="flex items-center justify-between w-full px-4 pb-2 border-b border-gray-500 border-solid mt-14">
              <p className="w-full text-3xl font-bold uppercase cursor-pointer text-start font-inter">
                Horários e <br />
                Locais Restritos
              </p>
              <ChevronSmallRight className="max-w-[40px] h-[40px] w-full" />
            </div>
            <div className="flex items-center justify-between w-full px-4 pb-2 mt-14">
              <p className="w-full text-3xl font-bold uppercase cursor-pointer text-start font-inter">
                Orientações <br />
                ao Gerador
              </p>
              <ChevronSmallRight className="max-w-[40px] h-[40px] w-full" />
            </div>
          </div>
          <div className="flex px-4 mt-8 space-x-4">
            <ClockHistory width={`30px`} height={`30px`} color="#000" />
            <p className="-mt-1 text-2xl font-medium font-inter">
              Seg - Sex: 7H - 17H <br />
              Sábado: 7H - 12H
            </p>
          </div>
          <div className="flex px-4 mt-8 space-x-4">
            <Whatsapp width={`30px`} height={`30px`} color="#000" />
            <p className="-mt-1 text-2xl font-medium font-inter">
              (12) 98890-3512 <br /> (12) 3931-5725
            </p>
          </div>
          <div className="flex w-full px-4">
            <a
              className="bg-[#14950f] mb-12 w-full py-4 px-4 rounded-lg mt-8 items-center flex focus:bg-[#14950f]"
              href="https://api.whatsapp.com/send?1=ptBR&phone=5512988903512&text=Olá%20quero%20solicitar%20uma%20ca%C3%A7amba"
              target={`_blank`}
            >
              <Whatsapp width={`24px`} height={`24px`} color={`#fff`} />
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
