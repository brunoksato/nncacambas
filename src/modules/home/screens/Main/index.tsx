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
      <div className="py-10 bg-gray-50">
        <SectionCompany />
        <SectionMap />
      </div>
    </>
  );
};

export default Home;
