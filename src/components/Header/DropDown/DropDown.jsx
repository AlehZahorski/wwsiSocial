import React, {Component} from 'react';
import style from './DropDown.module.css';

class DropDown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}  className={style.DropDown}>
          Show menu
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className={style.menu}
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button className={style.but}> Menu item 1 </button>
                <button className={style.but}> Menu item 2 </button>
                <button className={style.but}> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default DropDown;
