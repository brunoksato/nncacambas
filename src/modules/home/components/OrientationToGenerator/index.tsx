import { Element } from 'react-scroll';
import Image from '@global-components/Image';

const OrientationToGenerator = () => {
  return (
    <div className="w-full max-w-screen-xl px-4 mx-auto lg:px-0">
      <Element className="flex items-center justify-between w-full mb-20" name="sectionOrientation">
        <div className="flex flex-col items-center w-full mt-4">
          <div className="relative w-[600px] h-[340px] mt-8 max-w-full">
            <Image src="assets/cacambaDesenhoNew.svg" layout="fill" />
          </div>
          <div className="flex flex-col flex-wrap justify-center py-4 lg:mt-8 lg:flex-row">
            <div className="flex flex-col space-y-8 lg:space-x-8 lg:flex-row lg:space-y-0">
              <div className="relative flex flex-col w-full py-12 px-[1.25rem] max-w-[624px] border-[6px] border-solid border-[#F0D889] rounded-xl shadow-xl">
                <h5 className="text-2xl mb-4 uppercase font-bold font-inter text-[#F0BA07]">
                  Orientações
                </h5>
                <ul className="space-y-4 text-lg font-inter text-[#474d57]">
                  <div className="flex w-full">
                    <div className="w-[10px] h-[10px] mt-2 rounded-full mr-3 bg-[#F0D889]" />
                    <li className="flex flex-wrap w-full">
                      O GERADOR só pode dispor nas caçambas coleta resíduos da construção civil e
                      resíduos volumosos.
                    </li>
                  </div>
                  <div className="flex w-full">
                    <div className="w-[10px] h-[10px] mt-2 rounded-full mr-3 bg-[#F0D889]" />
                    <li className="flex flex-wrap w-full">
                      O GERADOR só pode dispor resíduos até o limite superior original do
                      equipamento.
                    </li>
                  </div>
                  <div className="flex w-full">
                    <div className="w-[10px] h-[10px] mt-2 rounded-full mr-3 bg-[#F0D889]" />
                    <li className="flex flex-wrap w-full">
                      AO GERADOR é proibido CONTRATAR TRANSPORTADOR NÃO CADASTRADO pela
                      administração municipal(Lei: 8.696/12 MULTA R$5.000,00).
                    </li>
                  </div>
                  <div className="flex w-full">
                    <div className="w-[10px] h-[10px] mt-2 rounded-full mr-3 bg-[#F0D889]" />
                    <li className="flex flex-wrap w-full">
                      AO GERADOR é proibido mudar o posicionamento das caçambas após estacionada,
                      seja dentro canteiro ou em via pública.
                    </li>
                  </div>
                </ul>
              </div>

              <div className="flex flex-col justify-between max-w-[624px] w-full py-12 px-[1.25rem] border-[6px] border-solid border-[#F0D889] rounded-xl shadow-xl">
                <div className="flex flex-col">
                  <h5 className="text-2xl uppercase font-bold font-inter text-[#F0BA07]">
                    O transportador não pode
                  </h5>
                  <ul className="mt-4 space-y-2 text-lg font-inter text-[#474d57]">
                    <div className="flex w-full">
                      <div className="w-[10px] h-[10px] mt-2 rounded-full mr-3 bg-[#F0D889]" />
                      <li className="flex flex-wrap w-full">Transportar resíduos domiciliares;</li>
                    </div>
                    <div className="flex w-full">
                      <div className="w-[10px] h-[10px] mt-2 rounded-full mr-3 bg-[#F0D889]" />
                      <li className="flex flex-wrap w-full">
                        Transportar resíduos no equipamento sem cobertura da carga;
                      </li>
                    </div>
                    <div className="flex w-full">
                      <div className="w-[10px] h-[10px] mt-2 rounded-full mr-3 bg-[#F0D889]" />
                      <li className="flex flex-wrap w-full">
                        Transportar equipamento com excesso de volume;
                      </li>
                    </div>
                  </ul>
                </div>
                <p className="mt-4 leading-6 uppercase font-inter text-[#474d57] text-base lg:text-lg">
                  <strong className="text-lg font-bold text-black">OBS:</strong> As caçambas
                  estacionárias podem permanecer em via pública pelo prazo máximo de 5 dias úteis, e
                  em canteiros de obra por 7 dias úteis conforme determina a lei.
                  {` `}
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-8 w-full max-w-[624px] py-12 px-[1.25rem] border-[6px] border-solid border-[#F0D889] rounded-xl shadow-xl">
              <h6 className="uppercase font-inter text-[#F0BA07] text-2xl font-bold">
                Definição de Materiais
              </h6>
              <div className="pb-4 text-lg">
                <ul className="mt-4 font-inter text-[#474d57]">
                  <div className="flex w-full">
                    <div className="w-[10px] h-[10px] mt-2 rounded-full mr-3 bg-[#F0D889]" />
                    <li className="flex flex-wrap w-full">MADEIRA: Somente madeira.</li>
                  </div>
                  <div className="flex w-full mt-4">
                    <div className="w-[10px] h-[10px] mt-2 rounded-full mr-3 bg-[#F0D889]" />
                    <li className="flex flex-wrap w-full">
                      ENTULHO: Terra, pedra, argila, telha vermelha ou de cimento, blocos, tijolo,
                      pisos e derivados de alvenaria.
                    </li>
                  </div>
                  <div className="flex w-full mt-4">
                    <div className="w-[10px] h-[10px] mt-2 rounded-full mr-3 bg-[#F0D889]" />
                    <li className="flex flex-wrap w-full">
                      MATERIAL RECICLAVEIS: PVC&#39;S, sacos plásticos, sacos de cimento, conduites,
                      tomadas, ferros, latas(desde que sem resíduos), telhas reciclável.
                    </li>
                  </div>
                  <div className="flex w-full mt-4">
                    <div className="w-[10px] h-[10px] mt-2 rounded-full mr-3 bg-[#F0D889]" />
                    <li className="flex flex-wrap w-full">GESSO: Somente gesso.</li>
                  </div>
                  <p className="w-full mt-4 text-base uppercase lg:text-lg">
                    <strong className="text-lg font-bold text-black">OBS:</strong> Caso a caçamba
                    esteja com material misturado, será gerado uma taxa no valor de R$100,00 de
                    triagem, entulho com gesso, será cobrada a diferença do material de maior valor.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};
export default OrientationToGenerator;
