import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import * as locationStyles from '../styles/modules/location.module.scss';

/******* Google Api Key *******/
/******* Potential Improvement: Store it more securely *******/
const apiKey = "AIzaSyCbRnhNO-Nh2aIWKg99DzdCc_e3L7M7rUs";

const Location = ({ google }) => {

  /******* Fetch site metadata *******/
  const res = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          address,
          mainServiceTime,
          sundaySchoolZoom
        }
      }
    }    
  `);
  
  /******* Church Geographic Coordinate *******/
  /******* Potential Improvement: Make them constants *******/
  const geo = {
    lat: 40.76662245529929,
    lng: -73.72475775191116
  };

  return (
    <>
      {/******* Title *******/}
      <h1 className = { locationStyles.title }>聚會時間</h1>
      
      {/******* Container *******/}
      <div className = { locationStyles.container }>
        
        {/******* Left Column *******/}
        <div className = { locationStyles.leftColumn }>
          
          {/******* Church Map *******/}
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
              containerStyle = {{ position: 'static' }}
              style = {{ width: '100%', height: '100%', borderRadius: '3rem' }}
            > 
              <Marker 
                title = { res.site.siteMetadata.address }
                name = { res.site.siteMetadata.title } 
                position = { geo }
                onClick = {() => { window.open("https://goo.gl/maps/zWJEsDiaPZDmrwNY6"); }}
              />
            </Map>
          </div>

          {/******* Text *******/}
          <p>
            <strong>中文堂</strong>
            <br></br>
            { res.site.siteMetadata.mainServiceTime }
          </p>
          <p>
            <strong>英文堂</strong>
            <br></br>
            { res.site.siteMetadata.mainServiceTime }
          </p>
          <p>{ res.site.siteMetadata.address }</p>

        </div>{/* Left column ends here */}

        {/******* Right Column *******/}
        <div className = { locationStyles.rightColumn }>

          {/******* General Map *******/}
          <div className = { locationStyles.map }>
            <Map 
              google = { google }
              initialCenter = { geo }
              zoom = {10}
              draggable = {true}
              scrollwheel = {true}
              zoomControl = {false}
              mapTypeControl = {false}
              streetViewControl = {false}
              fullscreenControl = {false}
              containerStyle = {{ position: 'static' }}
              style = {{ width: '100%', height: '100%', borderRadius: '3rem' }}
            >
            </Map>
          </div>

          {/******* Text *******/}
          <p>
            <strong>線上</strong>
            <br></br>
            { res.site.siteMetadata.mainServiceTime }
          </p>
          <p>
            <strong>兒童敬拜</strong>
            <br></br>
            { res.site.siteMetadata.mainServiceTime }
          </p>
          <p>
            線上崇拜通過Youtube直播
            <br></br>
            兒童敬拜Zoom ID: { res.site.siteMetadata.sundaySchoolZoom }
          </p>

        </div>{/* Right column ends here */}

      </div>{/* Outer container ends here */}
    </>
  );
}

export default GoogleApiWrapper({ apiKey })( Location );