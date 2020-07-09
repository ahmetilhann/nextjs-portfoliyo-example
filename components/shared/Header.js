import React, { Component } from 'react';
import Link from 'react/link';


class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/"> Home </Link>
        <Link href="/about"> About </Link>
        <Link href="/blogs"> Blogs </Link>
        <Link href="/cv"> CV </Link>
        <Link href="/portfolios"> Portfolios </Link>
      </React.Fragment>
    );
  }
}