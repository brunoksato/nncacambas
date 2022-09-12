import { Element } from 'react-scroll';

const Discards = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Element className="flex items-center justify-between w-full " name="sectionDiscards">
        <div className="flex flex-col items-center w-full mt-28">
          <h4 className="text-5xl font-bold text-[#fcd535] uppercase font-inter">Descartes</h4>
          <p className="mt-8 text-lg text-white pl-14 font-inter">
            Os descartes são feitos com a classificação do material, todo e qualquer residuo e
            descartado em usinas credenciadas, que pode ser consultada no site da prefeitura se a
            mesma possue a documentação e esta regularizada.
            <br />
            Os descartes são feitos e documentados, e pode ser retirado com o transportador a CTR
            que comprova o descarte consciente em locais regularizados.
            <br />A documentação das usinas podem ser solicitadas quando necessario, respeitando o
            prazo para o envio.
          </p>
        </div>
      </Element>
    </div>
  );
};
export default Discards;
