import React from 'react';
import Header from '../Header/Header'
import SectionBar from '../../PageComponents/SectionBar/SectionBar'
import EarnSection from '../../PageComponents/Earnsection/EarnSection'
import Banner from '../../PageComponents/Banner/Banner';
const Home = () => {
    return (
        <div>
      <Header></Header>
	  <SectionBar></SectionBar>
	  <Banner></Banner>
	  <EarnSection></EarnSection>
       



        </div>
    );
};

export default Home;