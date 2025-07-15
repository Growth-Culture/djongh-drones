import {
  PartnershipWrapper,
  PartnershipCard,
  ClientsLogosWrapper,
  LogoList,
  LogoImg,
  ClientName,
} from "./PartnershipSectionStyles";

const clients = [
  {
    name: "ACS Ship Suply",
    logo: "clients-logos/acs.jpg",
  },
  {
    name: "Globalchem Transport & Logistic",
    logo: "clients-logos/globalchem.png",
  },
  {
    name: "Sea Star Ship Suplies",
    logo: "clients-logos/seastar.jpg",
  },
];

const equipamentos = [
  {
    name: "DJI Enterprise",
    logo: "equipamentos-logos/dji-enterprise.png",
  },
  {
    name: "DJI RTK",
    logo: "equipamentos-logos/dji-rtk.png",
  },
  {
    name: "Metashape",
    logo: "equipamentos-logos/metashape.png",
  },
];

export function PartnershipSection() {
  return (
    <PartnershipWrapper>
      <PartnershipCard>
        <ClientName>Clientes</ClientName>
        <ClientsLogosWrapper>
          {clients.map((logo, index) => {
            return (
              <LogoList key={index}>
                <LogoImg src={logo.logo} alt={logo.name} />
              </LogoList>
            );
          })}
        </ClientsLogosWrapper>
      </PartnershipCard>
      <PartnershipCard>
        <ClientName>Equipamentos</ClientName>
        <ClientsLogosWrapper>
          {equipamentos.map((logo, index) => {
            return (
              <LogoList key={index}>
                <LogoImg src={logo.logo} alt={logo.name} />
              </LogoList>
            );
          })}
        </ClientsLogosWrapper>
      </PartnershipCard>
    </PartnershipWrapper>
  );
}
