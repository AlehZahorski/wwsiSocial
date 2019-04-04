import React from 'react';
import './style.css';


class Dropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({displayMenu: true}, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({displayMenu: false}, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        return (
            <div className="dropdown" style={{background: "red", width: "80px"}}>
                <div className="button" onClick={this.showDropdownMenu}> Log in</div>

                {this.state.displayMenu ? (

                        <ul>

                            <li><a className="active" href="#">Log in</a></li>
                            <li><a href="#">Regestration</a></li>
                            <li><a href="#">Log out</a></li>
                        </ul>
                    ) :
                    (
                        null
                    )
                }

            </div>

        );
    }
}

export default Dropdown;
