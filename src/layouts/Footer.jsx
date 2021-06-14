import React from 'react'
import { Container, Grid, List, Menu } from 'semantic-ui-react'

export default function Footer() {
    return (
        <div>
            <Menu inverted className="footer" >
                <Container>
                    <Grid columns={3}>
                        <Grid.Row>
                            <Grid.Column >
                                <List>
                                    <List.Item>
                                        <List.Icon name='users' />
                                        <List.Content>Semantic UI</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='marker' />
                                        <List.Content>New York, NY</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='mail' />
                                        <List.Content>
                                            <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='linkify' />
                                        <List.Content>
                                            <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                            <List>
                                    <List.Item>
                                        <List.Icon name='users' />
                                        <List.Content>Semantic UI</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='marker' />
                                        <List.Content>New York, NY</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='mail' />
                                        <List.Content>
                                            <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='linkify' />
                                        <List.Content>
                                            <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                            <List>
                                    <List.Item>
                                        <List.Icon name='linkedin' />
                                        <List.Content>Semantic UI</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='marker' />
                                        <List.Content>New York, NY</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='mail' />
                                        <List.Content>
                                            <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='linkify' />
                                        <List.Content>
                                            <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Menu>

        </div>
    )
}
