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

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Credits(props) {

	const [modal, setModal] = useState(false);

	const toggle = function(e) {
		e.preventDefault();
		setModal(!modal);
	}

	// Render
  return (
    <Container
		className='Credits'>

			<Button
			id='credits'
			onClick={toggle}>
				Credits
			</Button>

			<Modal	
			isOpen={modal}
			toggle={toggle}>
				<ModalHeader
				toggle={toggle}>
					Image Credits
				</ModalHeader>
				<ModalBody>
					<ul>
						<li>
							<h6>
								Primary Background
							</h6>
							Photo by 'Vishnu R Nair' from Pexels
						</li>
						<li>
							<h6>
								Kickdrum Image 
							</h6>
							Photo by 'Mynamepong' from Flaticon
						</li>
						<li>
							<h6>
								Snare Image
							</h6>
							Photo by 'Xnimrodx' from Flaticon
						</li>
						<li>
							<h6>
								Hihat Image 
							</h6>
							Photo by 'Freepik' from Flaticon
						</li> 
						<li>
							<h6>
								Clap Image
							</h6>
							Photo by 'Freepik' from Flaticon
						</li> 
					</ul>
				</ModalBody>
			</Modal>
		</Container>
  );
}
