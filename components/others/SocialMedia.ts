import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

interface SocialMedia {
  icon: React.ComponentType<any>;
  link: string;
}

const socialMediaData: SocialMedia[] = [
  { icon: FaGithub, link: 'https://github.com/imShuheb' },
  { icon: FaInstagram, link: '/instagram' },
  { icon: FaLinkedin, link: 'https://www.linkedin.com/in/moahmmed-shuheb-86abaa1a0' },
  { icon: FaFacebook, link: '/facebook' },
  { icon: FaTwitter, link: '/twitter' },
];

export default socialMediaData;
