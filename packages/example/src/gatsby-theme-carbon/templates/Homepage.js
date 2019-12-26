import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink, bannerTitle } from './Homepage.module.scss';

import Carbon from '../../images/homepage-bg.jpg';

const FirstLeftText = () => <h2>Reduce Stress</h2>;

const FirstRightText = () => (
  <p>
    A day at the spa is a great way to relax. Moreover, many of our clients have
    reported feeling less stressed for days and even weeks after their
    appointments!
  </p>
);

const SecondLeftText = () => <p>Book an Appointment</p>;

const SecondRightText = () => (
  <p>
    To schedule an appointment, call <strong>(555) 123.4567</strong>
  </p>
);

const BannerText = () => <h1 className={bannerTitle}>Relax! Renew.</h1>;

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
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
