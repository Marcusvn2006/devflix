// para utilizar o componente crie o import na página que deseja
// coloque o nome da pessoa entre <Footer>NomePessoa</Footer
// passe a informação dentro da tag Footer - LINK
// <Footer link={}>MuriloGaliazzi</Footer>
import SocialLink from "../sociallinks/sociallinks";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p>
        Feito com <ion-icon name="heart" /> por  <a href={link} target="_blank">
          {children} 
        </a>
      </p>
        <SocialLink icon={"logo-github"} href={"https://github.com/Marcusvn2006"} />
        <SocialLink icon={"logo-linkedin"} href={"https://devlinks-react.vercel.app/"} />
        <SocialLink icon={"logo-twitter"} href={"https://twitter.com/Marcusvn014"} />
        <SocialLink icon={"logo-instagram"} href={"https://www.instagram.com/eo.mvn/"} />
    </footer>
  );
};
export default Footer;
