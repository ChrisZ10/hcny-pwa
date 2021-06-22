import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { FaYoutube, FaFacebookSquare } from 'react-icons/fa';

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
        <Link to = "#youtube">
          <FaYoutube className = { footerStyles.youtube } />
        </Link> 
        <Link to = "#facebook">
          <FaFacebookSquare className = { footerStyles.facebook } />
        </Link>
      </p>
      <p className = { footerStyles.address }>{ data.site.siteMetadata.address }</p>
      <p className = { footerStyles.email }>{ data.site.siteMetadata.email }</p>
      <p className = { footerStyles.phone }>{ data.site.siteMetadata.phone }</p>
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
