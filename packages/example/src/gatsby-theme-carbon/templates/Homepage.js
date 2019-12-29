import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { bannerTitle } from './Homepage.module.scss';

import Carbon from '../../images/homepage-bg.jpg';

const FirstLeftText = () => <h2>Reduce Stress</h2>;

const FirstRightText = () => (
  <p>
    A day at the spa is a great way to relax. Moreover, many of our clients have
    reported feeling less stressed for days and even weeks after their
    appointments!
  </p>
);

const SecondLeftText = () => <p id="bookAnAppointment">By Appointment Only</p>;

const SecondRightText = () => (
  <p>
    To schedule an appointment, <br />
    call <strong>(904) 556-0648</strong>
  </p>
);

const BannerText = () => <h1 className={bannerTitle}>Relax</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#b4865a"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#b48659"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
