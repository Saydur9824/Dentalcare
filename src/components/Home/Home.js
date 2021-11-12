import React from 'react';
import Banner from '../Banner/Banner';
import News from '../News/News';
import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Welcome></Welcome>
            <News></News>
        </div>
    );
};

export default Home;