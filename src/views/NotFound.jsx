import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
  status: { textAlign: 'center', fontSize: 16, marginBottom: 16, color: 'red' },
};

const NotFound = () => { 
  return (
    <>
      <p style={styles.status}>
        This movie was not found. 
         <br/>
        You can go to <Link to='/'>home page</Link>.
     </p>
    </>
)
};

export default NotFound;