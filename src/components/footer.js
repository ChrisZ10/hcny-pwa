import React from 'react';
import { Link } from 'gatsby';
import { FaYoutube, FaFacebookSquare } from 'react-icons/fa';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import * as footerStyles from '../styles/modules/footer.module.scss';

const Footer = () => {

  const { title, slogan, address, email, phone } = useSiteMetadata();

  return (
    <footer className = { footerStyles.footer }>
      <p className = { footerStyles.slogan }>{ slogan }</p>
      <p className = { footerStyles.title }>{ title }</p>
      <p className = { footerStyles.smContainer }>
        <Link to = "#youtube">
          <FaYoutube className = { footerStyles.youtube } />
        </Link> 
        <Link to = "#facebook">
          <FaFacebookSquare className = { footerStyles.facebook } />
        </Link>
      </p>
      <p className = { footerStyles.address }>{ address }</p>
      <p className = { footerStyles.email }>{ email }</p>
      <p className = { footerStyles.phone }>{ phone }</p>
      <p className = { footerStyles.copyright }>&copy; 2021 Harvest Church of New York. All Rights Reserved</p>
      <p className = { footerStyles.legal }>
        <Link to = "#termsOfUse" className = {footerStyles.legalLink}>
          <span>Terms of Use</span>
        </Link>
        <Link to = "#privacyPolicy" className = {footerStyles.legalLink}>
          <span>Privacy Policy</span>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
