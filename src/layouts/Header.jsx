import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function Header() {
    return (
        <div>
            <Menu inverted fixed="top" className="bg-transperent">
                <Container>
                    <Menu.Item
                        name='Ana Sayfa'
                    />
                    <Menu.Item
                        name='messages'
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
