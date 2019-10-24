import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    const gridStyle = { height: '500px' };
    return (
        <div className="background-image">
          <Grid container verticalAlign="middle" style={gridStyle}>
            <Grid.Row columns="one">
              <Grid.Column>
                <Menu.Item>Join Starbucks Rewards today</Menu.Item>
                <Menu.Item>Just sign up, keep drinking coffee, and you can get Rewards in as few as 2-3 visits
                </Menu.Item>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
