const RestrictedTimeAndPlace = () => {
  return (
    <div className="w-full max-w-screen-xl px-4 mx-auto lg:px-0">
      <div className="flex items-center justify-between w-full " id="sectionRestrictedTimeAndPlace">
        <div className="flex flex-col items-center w-full mt-28">
          <h4 className="text-5xl text-center font-bold text-[#fcd535] uppercase font-inter">
            Horários e Locais Restritos
          </h4>
          <p className="mt-8 text-lg text-white lg:pl-14 font-inter">
            A N&N respeitando as Leis de cada cidade, tem o compromisso em alguns locais Restritos,
            solicitar autorizações ao departamentos responsável.
            <br />
            Como saber se ha restrições, locais de zona azul, centro cidade, rua sem acostamento
            para estacionar, entre outros, devera ser agendado com antecedencia para que possamos
            solicitar as autorizações, e entregas fora do horario de funcionamento da empresa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestrictedTimeAndPlace;
