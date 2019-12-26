import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
  HeaderMenuButton,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react';
import { AppSwitcher20, Close20 } from '@carbon/icons-react';
import cx from 'classnames';

import GlobalSearch from '../GlobalSearch';
import NavContext from '../../util/context/NavContext';
import useMetadata from '../../util/hooks/useMetadata';

import {
  header,
  switcherButtonOpen,
  skipToContent,
  headerName,
  collapsed,
  headerButton,
  headerPhone,
  switcherButton,
} from './Header.module.scss';

const Header = ({ children }) => {
  const {
    leftNavIsOpen,
    toggleNavState,
    switcherIsOpen,
    searchIsOpen,
  } = useContext(NavContext);
  const { isSearchEnabled } = useMetadata();

  return (
    <>
      <ShellHeader aria-label="Header" className={header}>
        <SkipToContent href="#main-content" className={skipToContent} />
        {/* <HeaderMenuButton
          className={cx('bx--header__action--menu', headerButton)}
          aria-label="Open menu"
          onClick={() => {
            toggleNavState('leftNavIsOpen');
            toggleNavState('switcherIsOpen', 'close');
          }}
          isActive={leftNavIsOpen}
        /> */}
        <Link
          className={cx(headerName, {
            [collapsed]: searchIsOpen,
          })}
          to="/"
        >
          {children}
        </Link>
        <HeaderGlobalBar>
          <h4 className={cx(headerPhone)}>(555) 123.4567</h4>
        </HeaderGlobalBar>
      </ShellHeader>
    </>
  );
};

const DefaultHeaderText = () => (
  <>
    Carbon&nbsp;<span>Design System</span>
  </>
);

Header.defaultProps = {
  children: <DefaultHeaderText />,
};

export default Header;
