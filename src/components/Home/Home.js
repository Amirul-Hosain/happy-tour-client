import React from 'react';
import Banner from '../Banner/Banner';
import ChoseUs from '../ChoseUs/ChoseUs';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div style={{ backgroundColor: 'whitesmoke' }}>
            <Banner></Banner>
            <Services></Services>
            <ChoseUs></ChoseUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;