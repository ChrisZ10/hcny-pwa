import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import * as locationStyles from '../styles/modules/location.module.scss';

const apiKey = "AIzaSyCbRnhNO-Nh2aIWKg99DzdCc_e3L7M7rUs";

const Location = ({ google }) => {

  const res = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          address
        }
      }
    }    
  `);
  
  const geo = {
    lat: 40.76662245529929,
    lng: -73.72475775191116
  };

  return (
    <>
      <h1>聚會時間</h1>
      <div className = { locationStyles.container }>
        <div className = { locationStyles.leftColumn }>
          <div className = { locationStyles.map }>
            <Map 
              google = { google }
              initialCenter = { geo }
              zoom = {18}
              draggable = {true}
              scrollwheel = {true}
              zoomControl = {false}
              mapTypeControl = {false}
              streetViewControl = {false}
              fullscreenControl = {false}
              containerStyle = {{
                position: 'static'
              }}
              style = {{
                width: '100%',
                height: '100%',
                borderRadius: '3rem'
              }}
            > 
              <Marker 
                title = { res.site.siteMetadata.address }
                name = { res.site.siteMetadata.title } 
                position = { geo }
                onClick = {() => {
                  window.open("https://goo.gl/maps/zWJEsDiaPZDmrwNY6");
                }}
              />
            </Map>
          </div>
        </div>
        <div className = { locationStyles.rightColumn }></div>
      </div>
    </>
  );
}

export default GoogleApiWrapper({ apiKey })( Location );