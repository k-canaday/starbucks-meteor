import React from 'react';
import TopMenu from '../components/TopMenu';
import MiddleMenu from '../components/MiddleMenu';
import FullWidthImage from '../components/FullWidthImage';
import TopMiddleMenu from '../components/TopMiddleMenu';

export default class Starbucks extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <TopMiddleMenu/>
          <MiddleMenu/>
          <FullWidthImage/>
        </div>
    );
  }
}
