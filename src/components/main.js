import React from 'react';
import Header from './home/header';
import Footer from './Footer';

export default (props) => 
<div>
  <Header/>
  {props.children}
  <Footer />
</div>;
