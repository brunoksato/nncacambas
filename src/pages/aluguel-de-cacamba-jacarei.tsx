import AdsLanding from '@global-layouts/AdsLanding';
import CityLanding from '@global-modules/landing/screens/CityLanding';

const AluguelDeCacambaJacarei = () => (
  <CityLanding
    city="Jacareí"
    slug="aluguel-de-cacamba-jacarei"
    address={{
      street: `Avenida Egídio Antônio Coimbra, 739`,
      neighborhood: `Residencial Parque dos Sinos`,
      postalCode: `12328-513`,
    }}
    localProof="Unidade local em Jacareí desde 2012."
  />
);

AluguelDeCacambaJacarei.Layout = AdsLanding;

export default AluguelDeCacambaJacarei;
