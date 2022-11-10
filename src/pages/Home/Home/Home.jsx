import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Contact from '../ServicesCard/Contact/Contact';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;