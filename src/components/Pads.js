import React, {useState, useEffect} from 'react';
import {Container} from 'reactstrap';
import {Howl, Howler} from 'howler';
import Pad from './Pad';

import '../assets/stylesheets/App.css';

export default function Pads(props) {

	const instruments = [
		{
			id: '1',
			name: 'kickdrum',
			letter: 'A'
		},
		{
			id: '2',
			name: 'snare',
			letter: 'S'
		},
		{
			id: '3',
			name: 'hihat',
			letter: 'D'
		},
		{
			id: '4',
			name: 'clap',
			letter: 'F'
		}
	];

  return (
    <Container 
		className='Pads'>
			{
				instruments.map((instrument, index) => {
					return (
						<Pad
						key={instrument.id}
						id={instrument.id}
						name={instrument.name}
						letter={instrument.letter}
						/>
					); 
				})
			}
    </Container>
  );
}
