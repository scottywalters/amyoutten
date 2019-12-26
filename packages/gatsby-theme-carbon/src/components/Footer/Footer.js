import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Row, Grid, Column } from '../Grid';
import {
  footer,
  grid,
  nav,
  listItem,
  logo,
  content,
} from './Footer.module.scss';

const Footer = ({ Content, links, Logo }) => {
  const { firstCol, secondCol } = links;
  const { site } = useStaticQuery(graphql`
    query BUILD_TIME_QUERY {
      site {
        buildTime(formatString: "DD MMMM YYYY")
      }
    }
  `);
  return (
    <footer className={footer}>
      <Grid className={grid}>
        <Row>
          <Column colLg={2} colMd={2}>
            <ul className={nav}>
              {firstCol &&
                firstCol.map((link, i) => (
                  <li key={i} className={listItem}>
                    <a href={link.href} aria-label={link.linkText}>
                      {link.linkText}
                    </a>
                  </li>
                ))}
            </ul>
          </Column>
          <Column colLg={2} colMd={2}>
            <ul className={nav}>
              {secondCol &&
                secondCol.map((link, i) => (
                  <li key={i} className={listItem}>
                    <a href={link.href} aria-label={link.linkText}>
                      {link.linkText}
                    </a>
                  </li>
                ))}
            </ul>
          </Column>
          <Column
            className={content}
            colLg={4}
            colMd={4}
            colSm={3}
            offsetLg={2}
          >
            <Content buildTime={site.buildTime} />
          </Column>
        </Row>
        <Row>
          <Column colLg={3}>
            <Logo />
          </Column>
        </Row>
      </Grid>
    </footer>
  );
};

const AMYOUTTENLogo = () => (
  <svg
    className={logo}
    width="241"
    height="73"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        fill="#B4865A"
        d="M39.208,43.744 C40.288,43.744 41.008,42.88 41.008,42.232 C41.008,41.08 40.648,40.072 40.648,39.136 C40.648,35.968 42.376,30.064 44.536,24.952 C46.624,25.24 47.776,25.528 48.784,25.816 C49.504,26.032 50.8,26.32 51.376,26.32 C52.312,26.32 52.744,25.528 52.744,24.664 C52.744,23.44 51.592,23.08 49.576,22.864 C48.712,22.792 45.76,22.288 45.76,22.288 C48.568,16.6 51.232,11.56 54.76,6.88 C56.056,5.152 57.064,4 57.064,2.92 C57.064,1.48 56.344,0.688 54.76,0.688 C53.176,0.688 51.232,2.632 48.496,5.44 C42.376,11.632 37.84,16.312 33.088,21.064 C30.424,20.92 27.4,20.848 24.592,20.848 C13.504,20.848 11.344,23.224 11.344,24.88 C11.344,25.96 11.992,26.824 13.144,26.824 C13.72,26.824 14.44,26.248 14.944,25.672 C15.664,24.808 18.184,23.512 24.448,23.512 C26.248,23.512 28.48,23.584 30.208,23.728 L29.4323992,24.4070301 C22.1847515,30.7533508 14.7056552,37.264 8.032,37.264 C5.296,37.264 4.36,35.896 4.36,34.456 C4.36,33.376 4.216,32.152 2.488,32.152 C0.976,32.152 0.04,33.232 0.04,34.744 C0.04,37.12 2.632,40.432 8.608,40.432 C16.384,40.432 25.96,32.08 34.6,23.944 C36.328,24.016 38.272,24.232 40.864,24.52 C38.344,30.568 36.544,37.12 36.544,40.432 C36.544,42.664 37.984,43.744 39.208,43.744 Z M42.016,21.928 C40.432,21.712 38.776,21.568 37.12,21.496 C41.8,16.888 47.056,11.2 49.648,8.392 C46.624,13.072 43.672,18.544 42.016,21.928 Z M47.416,41.008 C48.496,41.008 48.496,39.928 49.432,38.056 C50.224,36.4 51.232,34.024 52.6,32.08 C54.976,28.624 58.792,26.32 59.584,26.32 C60.16,26.32 60.592,26.464 60.592,27.184 C60.592,28.264 59.44,31.648 58.576,34.456 C58,36.112 57.352,37.552 57.352,38.056 C57.352,39.424 58.432,40.144 59.296,40.144 C60.232,40.144 60.88,38.992 61.6,37.264 C62.68,34.6 68.44,27.184 70.528,27.184 C70.816,27.184 71.032,27.472 71.032,27.76 C71.032,29.416 69.448,33.232 69.448,36.112 C69.448,38.704 70.672,40.216 72.832,40.216 C76.792,40.216 82.552,33.088 84.856,30.136 C85.72,29.056 86.08,28.552 86.08,27.76 C86.08,27.04 85.576,26.68 84.928,26.68 C84.136,26.68 83.2,27.832 82.336,28.912 C79.888,32.224 75.784,37.048 73.552,37.048 C72.976,37.048 72.76,36.544 72.76,35.752 C72.76,32.512 74.776,29.272 74.776,26.176 C74.776,24.448 73.192,23.584 71.968,23.584 C69.808,23.584 66.208,26.104 63.832,28.912 C64.048,27.904 64.264,26.752 64.264,25.6 C64.264,23.512 61.888,22.792 60.52,22.792 C58.792,22.792 55.264,25.384 53.176,27.832 C53.824,26.104 55.192,22.936 55.192,21.928 C55.192,20.56 54.328,20.2 53.32,20.2 C52.528,20.2 51.664,21.208 51.088,23.008 C47.92,32.872 45.76,37.552 45.76,39.064 C45.76,40.216 46.696,41.008 47.416,41.008 Z M80.104,72.904 C89.176,72.904 95.224,57.784 96.664,47.2 C97.168,47.056 97.96,46.984 98.248,46.984 C100.192,46.984 101.56,47.776 101.56,48.424 C101.56,49.288 101.344,49.72 101.344,50.296 C101.344,51.304 101.848,52.024 103.144,52.024 C104.728,52.024 105.448,50.512 105.448,49.144 C105.448,45.76 101.776,44.176 98.32,44.176 C97.96,44.176 97.456,44.248 97.096,44.32 C97.24,42.16 97.528,39.568 98.176,30.28 C98.32,28.048 98.824,26.464 99.184,25.528 C99.4,25.024 99.472,24.592 99.472,24.16 C99.472,23.008 98.608,22.864 97.96,22.864 C97.312,22.864 95.728,23.656 95.08,24.232 C94.72,24.52 93.64,26.392 92.56,27.904 C91.192,29.992 86.152,36.76 84.424,36.76 C84.064,36.76 83.992,36.472 83.992,36.04 C83.992,35.392 85.936,29.56 87.376,27.328 C88.24,25.96 88.816,25.168 88.816,24.52 C88.816,23.728 88.168,23.008 86.944,23.008 C85.648,23.008 84.568,24.304 83.56,26.752 C82.624,28.912 80.392,35.248 80.392,37.264 C80.392,39.352 81.688,40.432 83.128,40.432 C87.016,40.432 92.92,32.584 94.72,29.848 C94.72,30.928 93.928,39.28 93.352,44.752 C91.984,45.328 86.224,48.208 82.048,52.816 C77.008,58.288 74.92,64.336 74.92,67.72 C74.92,70.96 77.368,72.904 80.104,72.904 Z M80.248,70.168 C79.168,70.168 78.232,69.16 78.232,67.936 C78.232,65.344 79.888,60.16 83.848,55.84 C87.592,51.664 91.768,48.856 93.136,48.136 C92.272,55.624 86.728,70.168 80.248,70.168 Z M128.056,42.304 C133.744,42.304 140.728,36.976 146.416,30.064 C150.736,29.344 154.624,28.552 156.712,27.688 C158.296,27.04 159.232,26.464 159.232,25.096 C159.232,24.304 158.584,23.872 157.792,23.872 C157.288,23.872 156.568,24.16 156.064,24.376 C154.336,25.096 151.888,25.816 149.44,26.32 C153.112,20.848 155.848,14.152 155.848,8.824 C155.848,2.776 151.888,0.472 145.336,0.472 C133.456,0.472 117.76,9.4 117.76,21.28 C117.76,23.656 118.912,25.744 121.216,27.256 C120.496,29.344 120.064,31.504 120.064,33.304 C120.064,38.488 122.8,42.304 128.056,42.304 Z M137.632,27.616 C132.592,27.616 128.416,26.752 125.824,25.744 C129.352,18.04 137.488,8.896 144.184,8.896 C145.624,8.896 146.56,8.464 146.56,7.6 C146.56,6.88 145.48,5.656 143.68,5.656 C136.192,5.656 127.048,15.016 122.656,23.8 C122.008,22.864 121.504,21.568 121.504,20.488 C121.504,10.696 135.76,3.712 145.624,3.712 C150.376,3.712 152.176,5.872 152.176,9.112 C152.176,14.512 148.576,21.568 144.472,27.112 C142.24,27.4 140.008,27.616 137.632,27.616 Z M129.136,38.92 C125.392,38.92 123.664,36.256 123.664,32.944 C123.664,31.792 124.024,30.28 124.456,28.912 C127.552,30.064 132.52,30.712 137.488,30.712 C138.784,30.712 140.296,30.712 141.736,30.568 C137.632,35.464 132.232,38.92 129.136,38.92 Z M155.056,40.216 C157.864,40.216 161.104,37.624 164.272,34.528 C164.272,37.84 164.56,39.712 167.224,39.712 C170.536,39.712 175.36,34.24 178.744,30.136 C179.608,29.056 179.968,28.552 179.968,27.76 C179.968,27.04 179.464,26.68 178.816,26.68 C178.024,26.68 177.088,27.832 176.224,28.912 C173.704,32.224 169.384,36.688 167.8,36.688 C167.44,36.688 167.08,36.328 167.08,35.464 C167.08,32.656 168.592,28.84 170.248,26.536 C170.752,25.816 171.256,25.24 171.256,24.592 C171.256,23.8 170.752,23.08 169.6,23.08 C168.664,23.08 167.944,24.088 167.296,25.024 L167.178639,25.1955362 C166.572893,26.0917025 165.949818,27.1861818 164.056,30.568 C161.896,33.664 157.288,37.192 156.064,37.192 C155.632,37.192 155.488,36.688 155.488,36.328 C155.488,35.464 156.352,33.952 157.216,32.44 C158.512,30.136 159.88,27.328 159.88,24.88 C159.88,23.512 159.448,22.648 158.152,22.648 C156.712,22.648 156.208,23.584 156.208,25.384 C156.208,27.328 155.2,29.56 153.904,31.648 C152.752,33.52 151.744,35.32 151.744,36.976 C151.744,38.2 152.464,40.216 155.056,40.216 Z M186.016,47.344 C187.096,47.344 187.6,46.624 187.6,45.616 C187.6,44.536 186.664,43.816 186.664,42.592 C186.664,38.92 190.912,27.688 194.944,20.56 C196.888,19.912 199.336,18.904 200.776,18.904 C201.64,18.904 202.288,19.192 202.288,19.48 C202.288,19.84 202.072,20.272 202.072,20.632 C202.072,21.064 202.288,21.28 202.936,21.28 C203.656,21.28 205.456,19.696 205.456,18.256 C205.456,16.6 204.16,15.88 201.496,15.88 C200.056,15.88 198.616,16.168 197.392,16.528 C199.408,12.928 200.92,10.552 201.928,9.832 C203.368,8.68 203.656,8.104 203.656,7.168 C203.656,6.088 203.152,5.512 201.856,5.512 C200.776,5.512 199.912,6.376 198.688,8.104 C197.392,9.832 195.304,13.432 192.784,17.824 C190.84,18.688 187.024,19.624 184.144,19.624 C185.728,16.672 189.472,11.704 190.696,10.696 C192.136,9.616 192.28,9.04 192.28,8.176 C192.28,7.312 191.416,6.592 190.408,6.592 C189.544,6.592 188.536,7.6 187.24,9.328 C185.296,11.776 183.064,15.16 180.976,19.048 C180.04,19.048 179.176,17.68 177.88,17.68 C176.728,17.68 176.008,18.616 176.008,19.552 C176.008,21.064 177.952,21.856 179.392,22.072 C176.872,26.896 173.488,35.752 173.488,39.928 C173.488,41.728 174.352,42.952 175.432,42.952 C176.656,42.952 177.232,42.232 177.232,41.368 C177.232,40.72 176.728,40.36 176.728,39.424 C176.728,35.68 180.544,27.256 182.848,22.792 C185.512,22.792 188.248,22.648 190.48,21.712 C187.24,28.12 183.424,37.552 183.424,42.88 C183.424,46.12 184.72,47.344 186.016,47.344 Z M196.888,40.504 C204.88,40.504 210.712,34.312 214.096,30.136 C214.96,29.056 215.32,28.552 215.32,27.76 C215.32,27.04 214.816,26.68 214.168,26.68 C213.376,26.68 212.44,27.832 211.576,28.912 C208.984,32.08 204.16,37.624 198.112,37.624 C196.744,37.624 196.096,36.256 196.096,35.68 C196.096,35.176 196.384,34.672 197.32,34.456 C202.072,33.376 208.12,29.128 208.12,25.384 C208.12,23.8 206.464,22.648 204.952,22.648 C201.208,22.648 196.24,25.816 193.504,32.224 C192.784,32.44 192.136,33.304 192.136,34.024 C192.136,34.816 192.496,35.032 192.496,35.464 C192.496,38.632 194.512,40.504 196.888,40.504 Z M197.104,31.864 C198.472,29.704 202.288,25.888 204.016,25.888 C204.448,25.888 204.592,26.176 204.592,26.608 C204.592,27.832 199.696,31.36 197.104,31.864 Z M211,40.864 C212.224,40.864 212.872,37.696 213.592,36.76 C215.248,34.528 222.088,26.896 224.104,26.896 C224.536,26.896 224.752,27.328 224.752,27.688 C224.752,29.416 224.32,31.576 224.32,33.16 C224.32,36.328 224.968,39.64 228.568,39.64 C232.168,39.64 236.92,34.24 240.232,30.136 C241.096,29.056 241.456,28.552 241.456,27.76 C241.456,27.04 240.952,26.68 240.304,26.68 C239.512,26.68 238.576,27.832 237.712,28.912 C235.264,32.224 231.304,36.544 229.648,36.544 C228.28,36.544 228.136,34.6 228.136,32.368 C228.136,29.848 228.568,27.76 228.568,25.6 C228.568,23.872 227.344,22.864 225.76,22.864 C222.592,22.864 217.408,28.48 215.104,31.072 C215.248,30.64 216.184,27.472 216.616,26.32 C217.336,24.304 217.624,23.656 217.624,22.648 C217.624,21.64 216.616,21.136 216.112,21.136 C214.24,21.136 213.736,22.216 212.728,25.456 C211.36,29.704 208.552,37.12 208.552,38.92 C208.552,40.36 209.704,40.864 211,40.864 Z"
      />
    </g>
  </svg>
);

const DefaultContent = () => (
  <p>
    Shadow this content by importing the theme Footer and supplying your own
    props.
  </p>
);

Footer.defaultProps = {
  links: {
    firstCol: [
      { href: 'https://www.ibm.com/design', linkText: 'Sample' },
      { href: 'https://www.ibm.com/design', linkText: 'Links' },
      {
        href: 'https://www.ibm.com/design',
        linkText: 'Column',
      },
      { href: 'https://www.ibm.com/design', linkText: 'One' },
    ],
    secondCol: [
      {
        href: 'https://www.ibm.com/design',
        linkText: 'Dribbble',
      },
      {
        href: 'https://www.ibm.com/design',
        linkText: 'Medium',
      },
      {
        href: 'https://www.ibm.com/design',
        linkText: 'Twitter',
      },
    ],
  },
  Content: DefaultContent,
  Logo: AMYOUTTENLogo,
};

Footer.propTypes = {
  /**
   * Specify the first and second columns of your links
   */
  links: PropTypes.exact({
    firstCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
    secondCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
  }),

  /**
   * Specify the first and second columns of your links
   */
  Content: PropTypes.elementType,

  /**
   * Provide a logo to be rendered in the bottom left corner
   */
  Logo: PropTypes.elementType,
};

export default Footer;
