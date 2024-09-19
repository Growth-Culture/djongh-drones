import CookieConsent from "react-cookie-consent";

export function CookieControler() {
  return (
    <CookieConsent
      location="bottom" // Local onde o banner será exibido
      buttonText="Aceitar"
      declineButtonText="Recusar"
      cookieName="cookie-consent"
      style={{
        marginLeft: "2rem",
        marginBottom: "2rem",
        width: "50rem",
        maxWidth: "90%",
        background: "#FD7400",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "1.6rem",

        border: "1px solid #fff",
        borderRadius: "1.2rem",
        
        
      }} // Estilos do banner
      contentStyle={{flex: "0", lineHeight: "1.6rem", display: "flex", flexDirection: "column", gap: "2rem", fontSize:"1.3rem"}}
      buttonStyle={{
        background: "#fff",
        color: "#000",
        fontSize: "13px",
        
        padding: "0.8rem 3rem",
        borderRadius: "2rem"
      }} // Estilos do botão
      enableDeclineButton={true}
      declineButtonStyle={{ 
        background: "#FD7400",
        color: "#fff", 
        fontSize: "13px",

        border: "1px solid #fff",
        padding: "0.8rem 3rem",
        borderRadius: "2rem" }} // Estilos do botão de recusar
      expires={150} // Duração do cookie em dias
      onAccept={() => {
        console.log("Cookies aceitos!"); // O que fazer quando os cookies forem aceitos
      }}
      onDecline={() => {
        console.log("Cookies recusados!"); // O que fazer quando os cookies forem recusados
      }}
    >

      <h2 style={{fontSize: "22px"}}>Cookie Consent</h2>
        Este site utiliza cookies para melhorar a sua experiência de navegação,
        personalizar conteúdo e anúncios, fornecer funcionalidades de redes
        sociais e analisar o tráfego. Ao continuar navegando, você concorda com
        o uso de cookies. Para mais informações, consulte nossa Política de
        Privacidade.

    </CookieConsent>
  );
}
