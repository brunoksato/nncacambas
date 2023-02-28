const Footer = () => {
  return (
    <div className="w-full bg-[#fcd535]">
      <div className="flex justify-center max-w-screen-xl px-8 py-12 mx-auto lg:px-0">
        <span className="text-sm font-inter lg:text-base">
          &#169; Todos os direitos reservados - {new Date().getFullYear()} Todos os direitos
          reservados à N&N Caçambas
        </span>
      </div>
    </div>
  );
};

export default Footer;
