import React, { useEffect } from 'react';
import classNames from 'classnames';
import slideUp from 'src/utilities/slideUp';
import slideDown from 'src/utilities/slideDown';
import getParents from 'src/utilities/getParents';
import { NavLink, Link } from 'react-router-dom';

interface MenuHeadingProps {
  className?: string;
  text?: string;
  children?: React.ReactNode;
}

const MenuHeading: React.FC<MenuHeadingProps> = ({
  className,
  text,
  children
}) => {
  const compClass = classNames({
    'nk-menu-heading': true,
    [className!]: className
  });
  return (
    <li className={compClass}>
      <h6 className="overline-title">{text || children}</h6>
    </li>
  );
};

interface MenuItemTemplateProps {
  text?: string;
  icon?: string;
}

const MenuItemTemplate: React.FC<MenuItemTemplateProps> = ({ text, icon }) => (
  <>
    {icon && (
      <span className="nk-menu-icon">
        <em className={`icon ni ni-${icon}`}></em>
      </span>
    )}
    {text && <span className="nk-menu-text">{text}</span>}
  </>
);

interface MenuItemLinkProps extends MenuItemTemplateProps {
  to: string;
  blank?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  sub?: boolean;
}

const MenuItemLink: React.FC<MenuItemLinkProps> = ({
  text,
  icon,
  to,
  blank,
  onClick,
  sub
}) => (
  <>
    {!blank && !sub && (
      <NavLink className="nk-menu-link" to={to}>
        <MenuItemTemplate icon={icon} text={text} />
      </NavLink>
    )}
    {blank && (
      <Link className="nk-menu-link" to={to} target="_blank">
        <MenuItemTemplate icon={icon} text={text} />
      </Link>
    )}
    {sub && (
      <a
        className="nk-menu-link nk-menu-toggle"
        onClick={onClick}
        href="#expand"
      >
        <MenuItemTemplate icon={icon} text={text} />
      </a>
    )}
  </>
);

interface MenuItemProps {
  sub?: boolean;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ sub, className, children }) => {
  const compClass = classNames({
    'nk-menu-item': true,
    'has-sub': sub,
    [className!]: className
  });
  return <li className={compClass}>{children}</li>;
};

interface MenuSubProps {
  mega?: boolean;
  className?: string;
}

const MenuSub: React.FC<MenuSubProps> = ({ mega, className, children }) => {
  const compClass = classNames({
    'nk-menu-sub': true,
    [className!]: className
  });
  return <ul className={compClass}>{children}</ul>;
};

interface MenuListProps {
  className?: string;
}

const MenuList: React.FC<MenuListProps> = ({ className, children }) => {
  const compClass = classNames({
    'nk-menu': true,
    [className!]: className
  });
  return <ul className={compClass}>{children}</ul>;
};

const Menu: React.FC = () => {
  let menu = {
    classes: {
      main: 'nk-menu',
      item: 'nk-menu-item',
      link: 'nk-menu-link',
      toggle: 'nk-menu-toggle',
      sub: 'nk-menu-sub',
      subparent: 'has-sub',
      active: 'active',
      current: 'current-page'
    }
  };

  let currentLink = function (selector: string) {
    let elm: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
    elm.forEach(function (item) {
      var activeRouterLink = item.classList.contains('active');
      if (activeRouterLink) {
        let parents = getParents(
          item,
          `.${menu.classes.main}`,
          menu.classes.item
        );
        parents.forEach((parentElemets) => {
          parentElemets.classList.add(
            menu.classes.active,
            menu.classes.current
          );
          let subItem: HTMLElement = parentElemets.querySelector(
            `.${menu.classes.sub}`
          );
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          subItem !== null && (subItem.style.display = 'block');
        });
      } else {
        item.parentElement!.classList.remove(
          menu.classes.active,
          menu.classes.current
        );
      }
    });
  };

  let dropdownToggle = function (elm: HTMLElement) {
    let parent = elm.parentElement!;
    let nextelm = elm.nextElementSibling as HTMLElement;
    let speed =
      nextelm.children.length > 5 ? 400 + nextelm.children.length * 10 : 400;
    if (!parent.classList.contains(menu.classes.active)) {
      parent.classList.add(menu.classes.active);
      slideDown(nextelm, speed);
    } else {
      parent.classList.remove(menu.classes.active);
      slideUp(nextelm, speed);
    }
  };

  let closeSiblings = function (elm: HTMLElement) {
    let parent = elm.parentElement!;
    let siblings = parent.parentElement!.children;
    Array.from(siblings).forEach((item) => {
      if (item !== parent) {
        item.classList.remove(menu.classes.active);
        if (item.classList.contains(menu.classes.subparent)) {
          let subitem: NodeListOf<HTMLElement> = item.querySelectorAll(
            `.${menu.classes.sub}`
          );
          subitem.forEach((child) => {
            child.parentElement!.classList.remove(menu.classes.active);
            slideUp(child, 400);
          });
        }
      }
    });
  };

  let menuToggle = function (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.preventDefault();
    let item = e.target as HTMLElement;
    item = item.closest(`.${menu.classes.toggle}`)!;
    dropdownToggle(item);
    closeSiblings(item);
  };

  useEffect(() => {
    currentLink(`.${menu.classes.link}`);
    // eslint-disable-next-line
  }, [null]);

  return (
    <MenuList>
      <MenuItem sub>
        <MenuItemLink
          icon="dashboard"
          text="Control Panel"
          onClick={menuToggle}
          sub
          to="#"
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Notifications" to="/home" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Google Stats" to="/home-ecommerce" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink
          icon="dashboard"
          text="Home Slideshow"
          onClick={menuToggle}
          sub
          to="#"
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Slideshow List" to="/home" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Add Image to Slideshow" to="/home-ecommerce" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink
          icon="dashboard"
          text="Edit Content"
          onClick={menuToggle}
          sub
          to="#"
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Pages & Subpages" to="/home" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Landing Page Popup" to="/home-ecommerce" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink
          icon="dashboard"
          text="Edit user"
          onClick={menuToggle}
          sub
          to="#"
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="User List" to="/home" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Add User" to="/home-ecommerce" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="User Courses" to="/home" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Export Email Addresses" to="/home-ecommerce" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink
          icon="dashboard"
          text="Edit Email Templates"
          onClick={menuToggle}
          sub
          to="#"
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Admin Email Templates" to="/home" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink
          icon="dashboard"
          text="Edit Categories"
          onClick={menuToggle}
          sub
          to="#"
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Category List" to="/home" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Add Category" to="/home-ecommerce" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink
          icon="dashboard"
          text="Edit Courses"
          onClick={menuToggle}
          sub
          to="#"
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Courses List" to="/home" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Add Courses" to="/home-ecommerce" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem>
        <MenuItemLink icon="dashboard" text="Edit Orders" to="#" />
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink
          icon="dashboard"
          text="Edit News"
          onClick={menuToggle}
          sub
          to="#"
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="News List" to="/home" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Add News" to="/home-ecommerce" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink
          icon="dashboard"
          text="Edit Questions & Answers"
          onClick={menuToggle}
          sub
          to="#"
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Q&A List" to="/home" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Add Q&A" to="/home-ecommerce" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Q&A Type List" to="/home-ecommerce" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink
          icon="dashboard"
          text="Edit Settings"
          onClick={menuToggle}
          sub
          to="#"
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Settings list" to="/home" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="VAT Settings" to="/home-ecommerce" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Under Maintenance" to="/home-ecommerce" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Master Password" to="/home-ecommerce" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink
          icon="dashboard"
          text="Edit Newsletter"
          onClick={menuToggle}
          sub
          to="#"
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Newsletter List" to="/home" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Add Newsletter" to="/home-ecommerce" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink
          icon="dashboard"
          text="Edit Videos"
          onClick={menuToggle}
          sub
          to="#"
        />
        <MenuSub>
          <MenuItem>
            <MenuItemLink text="Videos list" to="/home" />
          </MenuItem>
          <MenuItem>
            <MenuItemLink text="Add Video" to="/home-ecommerce" />
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem sub>
        <MenuItemLink icon="dashboard" text="Data Courses" to="#" />
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
