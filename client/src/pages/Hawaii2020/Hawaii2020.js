import React from 'react';
import "./Hawaii2020.css";
import NavBar from "components/Navbar/Navbar";
import Banner from "components/Banner/Banner";
import Banner__pink from "components/Banner/Banner__pink.png";
import BannerImageCard from "components/BannerImageCard/BannerImageCard";
import Banner__Image from "assets/images/TripBanner.png";
import TripDetails from "components/TripDetails/TripDetails";
import ActivityList from "components/ActivityList/ActivityList";
import Button from "components/Button/Button";
import Footer from "components/Footer/Footer";

const Hawaii2020 = () => {
  let momActivities = ["Spa", "Wine Nights", "Brunch with Other Moms"];
  let kidsActivities = [
    "Snorkeling",
    "Hiking",
    "Island Hopping",
    "Hawaiian Luaus",
    "Food Markets",
    "Beaches"
  ];

  return(
    <div className="Hawaii2020">
      <NavBar />
      <Banner background={Banner__pink}>
        <h3>Trip: Hawaii 2020</h3>
      </Banner>
      <div className="Hawaii2020__BannerImageCard-container">
        <BannerImageCard background={Banner__Image} message="Hawaii 2020" />
      </div>
      <div className="Hawaii2020__body-container">
        <TripDetails />
        <div className="Hawaii2020__ActivityList-container">
          <ActivityList title="Activities for Moms" activities={momActivities} color="purple" />
        </div>
        <div className="Hawaii2020__ActivityList-container"></div>
          <ActivityList title="Activities for Moms & Kids" activities={kidsActivities} color="red" />
        </div>
        <div className="Hawaii2020__button-container">
          <Button text="Book Now" color="pink" size="large" />
        </div>
      <Footer />
    </div>
  );
}

export default Hawaii2020;
