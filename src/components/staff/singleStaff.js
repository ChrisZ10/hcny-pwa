import React from 'react';

const SingleStaff = ({ name, title }) => {
  return (
    <div>
      <h3>{ name }</h3>
      <h3>{ title }</h3>
    </div>
  );
};

export default SingleStaff;