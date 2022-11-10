import React from 'react';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';
import Contact from '../ServicesCard/Contact/Contact';
import useTitle from '../../../hooks/useTitle';
import Offer from '../Offer/Offer';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Offer></Offer>
            <Contact></Contact>
        </div>
    );
};

export default Home;