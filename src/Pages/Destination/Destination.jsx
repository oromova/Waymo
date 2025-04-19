import React from 'react';
import Heading from '../../Component/Heading';
import img from '../../assets/destination-bg.jpeg';
import OurDestinations from './OurDestinations';

const Destination = () => {
  return (
    <section>
      <Heading image={img} title={'Explore Destinations'} />
      <OurDestinations/>
    </section>
  );
};

export default Destination;