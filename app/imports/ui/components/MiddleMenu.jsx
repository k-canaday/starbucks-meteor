import React from 'react';
import { Container, Menu, Dropdown, Image } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Container>
            <Menu.Item><Image src="https://www.starbucks.com/static/images/global/logo.svg"
    centered/></Menu.Item>
            <Dropdown item text="COFFEE">
              <Dropdown.Menu>
                <Dropdown.Item>Our Coffees</Dropdown.Item>
                <Dropdown.Item>Starbucks at Home</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="MENU">
              <Dropdown.Menu>
                <Dropdown.Item>Hot Coffees</Dropdown.Item>
                <Dropdown.Item>Hot Teas</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SOCIAL IMPACT</Menu.Item>
            <Menu.Item>STARBUCKS REWARDS</Menu.Item>
            <Menu.Item>STORIES</Menu.Item>
            <Menu.Item>GIFT CARDS</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
