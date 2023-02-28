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
      {/* <div className="bg-white">
        <div className="w-full max-w-screen-xl px-4 pb-12 mx-auto lg:px-0">
          <div
            className="flex flex-col items-center py-8 space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row"
            id="contact"
          >
            <h4 className="text-[60px] text-black font-bold font-inter">Enderecos</h4>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
