import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as sermonStyles from '../styles/modules/sermon.module.scss';

const Sermon = () => {
  const data = useStaticQuery(graphql`
    query {
      wpContent {
        mediaItems(where: {title: "sermon-cover"}) {
          edges {
            node {
              slug
            }
          }
        }
      }
    }
  `);
  console.log(data.wpContent.mediaItems.edges[0].node.slug);

  return (
    <div className = { sermonStyles.container }>
      <div className = { sermonStyles.leftColumn }>Left Column</div>
      <div className = { sermonStyles.rightColumn }>Right Column</div>
    </div>
  );
}

export default Sermon;