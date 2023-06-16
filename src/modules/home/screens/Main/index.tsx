import SectionCompany from '@home/components/Company';
import Discards from '@home/components/Discards';
import SectionFleet from '@home/components/Fleet';
import OrientationToGenerator from '@home/components/OrientationToGenerator';
import RestrictedTimeAndPlace from '@home/components/RestrictedTimeAndPlace';
import SectionMap from '@home/components/sectionMap';

const Home = () => {
  return (
    <>
      <SectionFleet />
      <div className="bg-[#0c0d0d] pb-28">
        <RestrictedTimeAndPlace />
        <Discards />
      </div>
      <OrientationToGenerator />
      <div className="pt-10 pb-20 bg-gray-50">
        <SectionCompany />
        <SectionMap />
      </div>
      <div className="bg-white">
        <div className="w-full max-w-screen-xl px-4 pb-12 mx-auto lg:px-0">
          <div
            className="flex flex-col items-center py-8 space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row"
            id="address"
          >
            <h4 className="text-[60px] text-black font-bold font-inter">Endereços</h4>
          </div>

          <div className="flex my-12 space-x-4">
            <div className="flex flex-col justify-center w-full h-full p-4 space-y-4 bg-white rounded-lg lg:w-1/2">
              <h4 className="text-2xl font-bold font-inter">
                Jacareí <span className="ml-2 text-sm text-gray-400">Matriz</span>
              </h4>
              <p className="text-lg font-inter">
                Av. Egídio Antônio Coimbra, 739 - Res. Parque dos Sinos, <br /> Jacareí - SP,
                12328-513
              </p>
            </div>

            <div className="flex flex-col justify-center w-full h-full p-4 space-y-4 bg-white rounded-lg lg:w-1/2">
              <h4 className="text-2xl font-bold font-inter">São José dos Campos</h4>
              <p className="text-lg font-inter">
                R. Tijuca, 370 - Jardim Satélite, <br /> São José dos Campos - SP, 12230-020
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
