import Categories from './Categories';
import React from 'react';

export default function Layout(props) {
  return (
    <div>
      <Categories />
      {props.children}
    </div>
  );
}
