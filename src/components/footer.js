import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FaYoutube, FaFacebookSquare, FaCopyright } from 'react-icons/fa';

import * as footerStyles from '../styles/modules/footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author, title, slogan, address, email, phone
        }
      }
    }
  `);

  return (
    <footer className = { footerStyles.footer }>
      <p className = { footerStyles.slogan }>{ data.site.siteMetadata.slogan }</p>
      <p className = { footerStyles.title }>{ data.site.siteMetadata.title }</p>
      <p className = { footerStyles.smContainer }>
        <FaYoutube className = { footerStyles.youtube } />
        <FaFacebookSquare className = { footerStyles.facebook } />
      </p>
      <p className = { footerStyles.address }>{ data.site.siteMetadata.address }</p>
      <p className = { footerStyles.email }>{ data.site.siteMetadata.email }</p>
      <p className = { footerStyles.phone }>{ data.site.siteMetadata.phone }</p>
      <p className = { footerStyles.copyright }>&copy; 2021 Harvest Church of New York. All Rights Reserved</p>
      <p className = { footerStyles.legal }>
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
      </p>
    </footer>
  );
};

export default Footer;
