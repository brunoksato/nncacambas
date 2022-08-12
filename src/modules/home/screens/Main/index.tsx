import SectionCompany from '@home/components/Company';
import Discards from '@home/components/Discards';
import SectionFleet from '@home/components/Fleet';
import RestrictedTimeAndPlace from '@home/components/RestrictedTimeAndPlace';

const Home = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <SectionCompany />
      <SectionFleet />
      <RestrictedTimeAndPlace />
      <Discards />
    </div>
  );
};

export default Home;
