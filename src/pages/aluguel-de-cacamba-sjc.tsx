import AdsLanding from '@global-layouts/AdsLanding';
import CityLanding from '@global-modules/landing/screens/CityLanding';

const AluguelDeCacambaSjc = () => (
  <CityLanding
    city="São José dos Campos"
    slug="aluguel-de-cacamba-sjc"
    address={{
      street: `Rua Tijuca, 370`,
      neighborhood: `Jardim Satélite`,
      postalCode: `12230-020`,
    }}
    localProof="Unidade no Jardim Satélite e cadastro 19 na Urbam."
  />
);

AluguelDeCacambaSjc.Layout = AdsLanding;

export default AluguelDeCacambaSjc;
