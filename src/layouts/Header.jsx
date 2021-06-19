import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function Header() {
    return (
        <div>
            <Menu id="navbarMenu" inverted fixed="top" className="bg-transperent">
                <Container>
                    <Menu.Item
                        as={NavLink}
                        to="/"
                        name='Ana Sayfa'
                    />
                    <Menu.Item
                        as={NavLink}
                        to="/advertisements"
                        name='İş İlanları'
                    />
                    <Menu.Item
                        as={NavLink}
                        to="/addAdvertisement"
                        name='İş İlanı Ekle'
                    />

                    <Menu.Item
                        as={NavLink}
                        to="/jobSeekers"
                        name='İş Arayanlar'
                    />
                    <Menu.Item
                        as={NavLink}
                        to="/employers"
                        name='Firmalar'
                    />

                    <Menu.Menu position='right'>

                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}

window.addEventListener("scroll", () => {
    let y = window.scrollY;
    let navbar = document.getElementById("navbarMenu");

    if (y > 200) {
        navbar.classList.remove("bg-transperent");
        navbar.classList.add("bg-main-color");
    }
    else {
        navbar.classList.remove("bg-main-color");
        navbar.classList.add("bg-transperent");
    }
})