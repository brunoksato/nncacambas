import AdsLanding from '@global-layouts/AdsLanding';
import CityLanding from '@global-modules/landing/screens/CityLanding';

const AluguelDeCacamba = () => (
  <CityLanding
    city="SJC e Jacareí"
    slug="aluguel-de-cacamba"
    localProof="Única unidade em Jacareí, com entrega agendada também em São José dos Campos."
  />
);

AluguelDeCacamba.Layout = AdsLanding;

export default AluguelDeCacamba;
