import React from 'react';
import classNames from 'classnames';
import SimpleBar from 'simplebar-react';
import Menu from './Menu';

const Sidebar = ({}) => {
  return (
    <div>
      <div className="nk-sidebar-element nk-sidebar-body">
        <div className="nk-sidebar-content">
          <SimpleBar className="nk-sidebar-menu">
            <Menu />
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
