import "./sociallinks.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";

const SocialLink = ({ icon, href}) => {
  return (
    <a href={href} target="_blank">
      <ion-icon name={icon} size="large"/>
    </a>
  );
};
export default SocialLink;
