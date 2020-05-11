import React, {useState, useEffect} from 'react';
import {Container} from 'reactstrap';
import {Howl, Howler} from 'howler';

import kickImage from '../assets/images/kick.png';
import snareImage from '../assets/images/snare.png';
import hihatImage from '../assets/images/hihat.png';
import clapImage from '../assets/images/clap.png';
import '../assets/stylesheets/App.css';

export default function Pad({id, name, letter}) {

  return (
    <Container 
		id={id}
		className='Pad'>
			<div 
			className='card'>
				<Heading 
				title={name} />
				<Icon 
				iconType={name}
				/>
			</div>
			<KeyMap letter={letter} />
    </Container>
  );
}

function Icon({iconType}) {

	// Determine which icon to get from 'assets/images'
	const iconLink = getIcon(iconType); 

	// Render
	return (
		<div
		className='icon'>
			<img
			src={iconLink} 
			height='75%'
			width='75%'
			/>
		</div>
	);
}

function Heading({title}) {

	let titleArray;
	let firstLetter;
	let formatedTitle;

	// Convert title to array and capitalise first letter
	titleArray = title.split("");
	firstLetter = titleArray.shift(); 
	firstLetter = firstLetter.toUpperCase(); 
	// Insert first letter back into array then stringify 
	titleArray.unshift(firstLetter);
	formatedTitle = titleArray.join("");

	return (
		<h2>
			{formatedTitle}
		</h2>
	);
}

function KeyMap({letter}) {
	return (
	<div
	id='keymap'
	className='KeyMap'>
		{letter}	
	</div>
	);
}

// Helpers
function getIcon(iconType) {

	let iconLink;
	switch (iconType) {
		case 'kickdrum'	:
			iconLink = kickImage;
			break;
		case 'snare'		:
			iconLink = snareImage;
			break;
		case 'hihat'		:
			iconLink = hihatImage;
			break;
		case 'clap'			:
			iconLink = clapImage;
			break;
	}

	return iconLink;
}
