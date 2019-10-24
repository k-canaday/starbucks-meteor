import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

export default class TopMiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmiddle">
          <Container>
            <Menu.Item fitted position="right">Find a Store</Menu.Item>
            <Menu.Item>|</Menu.Item>
            <Menu.Item fitted>Sign In</Menu.Item>
            <Menu.Item>|</Menu.Item>
            <Menu.Item fitted>Join Now</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
