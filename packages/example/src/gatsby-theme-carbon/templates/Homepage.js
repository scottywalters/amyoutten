import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink, bannerTitle } from './Homepage.module.scss';

import Carbon from '../../images/homepage-bg.jpg';

const FirstLeftText = () => <p>Callout component</p>;

const FirstRightText = () => (
  <p>
    This is a callout component. You can edit the contents by updating the
    pre-shadowed homepage template. You can provide <code>color</code> and{' '}
    <code>backgroundColor</code> props to suit your theme.
  </p>
);

const SecondLeftText = () => <p>Book an Appointment</p>;

const SecondRightText = () => (
  <p>
    To schedule an appointment, call <code>(555) 123.4567</code>
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
