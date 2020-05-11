import React, {useState, useEffect} from 'react';
import {Howl, Howler} from 'howler';
import {
	Container, 
	Button,
	Modal, 
	ModalHeader, 
	ModalBody, 
	ModalFooter
} from 'reactstrap';

import Pads from './Pads';
import Credits from './Credits';

import kickSample from '../assets/audio/kick.wav';
import snareSample from '../assets/audio/snare.wav';
import hihatSample from '../assets/audio/hihat.wav';
import clapSample from '../assets/audio/clap.wav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/stylesheets/App.css';

export default function App() {

	// Hooks 
	useEffect(() => {
		document.addEventListener('keydown', keydownHandler);
	});

	// Functions
	// Determine which key is pressed for sample selection
	const keydownHandler = function(e) {

		let samplePath;
		
		switch (e.key) {
			case 'a'	:
				samplePath = kickSample; break;
			case 's'	:
				samplePath = snareSample; break;
			case 'd'	:
				samplePath = hihatSample; break;
			case 'f'	:
				samplePath = clapSample; break;
			default		:
				return; 
		}

		const sound = new Howl({
			src: samplePath,
			html5: true
		});
		sound.play();
	}

	// Render	
  return (
    <Container 
		fluid={true}
		className='App'>
			<h1
			id='mainHeading'>
				Drum Machine
			</h1>
			<Pads />
			<Credits />
    </Container>
  );
}
