import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      collapsing: false,
      in: false,
      height: "auto",
    };

    this.navLinkList = undefined;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  // PropTypes
  static get propTypes() {
    return {
      className: PropTypes.string,
      brand: PropTypes.element,
      links: PropTypes.arrayOf(PropTypes.element),
    };
  }

  // Default Props
  static get defaultProps() {
    return {
      className: "",
      brand: null,
      links: [],
    };
  }

  // Toggling the navbar state
  toggle() {
    if (this.state.collapsing) {
      return;
    }

    const collapsed = this.state.collapsed;
    this.setState(
      {
        collapsed: !collapsed,
        collapsing: true,
        height: collapsed ? 0 : this.navLinkList.clientHeight,
      },
      () => {
        setTimeout(() => {
          this.setState(
            {
              height: collapsed ? this.navLinkList.clientHeight : 0,
            },
            () => {
              setTimeout(() => {
                this.setState({
                  collapsing: false,
                  height: "auto",
                  in: collapsed ? true : undefined,
                });
              }, 300);
            }
          );
        }, 10);
      }
    );
  }

  // Opening the navbar
  open() {
    if (this.state.collapsed) {
      this.toggle();
    }
  }

  // Closing the navbar
  close() {
    if (!this.state.collapsed) {
      this.toggle();
    }
  }

  render() {
    return (
      <nav
        id={styles.mainNavbar}
        className={`navbar navbar-expand-lg ${this.props.className || ""}`}
      >
        {this.props.brand &&
          React.cloneElement(this.props.brand, {
            className: `navbar-brand ${styles["navbar-brand"]}`,
            onClick: this._close,
          })}
        <button
          className={`navbar-toggler ${styles["navbar-toggler"]}`}
          type="button"
          onClick={this.toggle}
        >
          <span
            className={`navbar-toggler-icon ${styles["navbar-toggler-icon"]}`}
          />
        </button>
        <div
          className={classnames("navbar-collapse", {
            show: this.state.in,
            collapsing: this.state.collapsing,
            collapse: !this.state.collapsing,
          })}
          style={{ height: this.state.height }}
        >
          <ul
            className={`navbar-nav ml-auto ${styles["navbar-nav"]}`}
            ref={(el) => {
              this.navLinkList = el;
            }}
          >
            {React.Children.map(this.props.links, (link) => (
              <li className="nav-item">
                {React.cloneElement(link, {
                  onClick: this.close,
                  className: `nav-link ${styles["nav-link"]} ${link.props.className}`,
                })}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
