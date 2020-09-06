import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

import './Login.css';


export default function Login({ onIdSubmit }) {

	const idRef = useRef()
	const handleSubmit = e => {
		e.preventDefault()

		onIdSubmit(idRef.current.value)
	}

	const createNewId = () => {
		onIdSubmit(uuidV4())
	}
	return (
		<section className="LoginSection">
			<Container className="align-items-center">
				<Form 
					className="form"
					onSubmit={handleSubmit}
				>
					<Form.Group>
						<Form.Label>Enter Your Id</Form.Label>
							<Form.Control 
							type="text"
							className="control" 
							ref={idRef}
							required>
							</Form.Control>
					</Form.Group>
						<Button 
							type="submit"
							color="info">
							Login
						</Button>
						<Button 
							onClick={createNewId}
							color="primary">
							Create A New Id
						</Button>
				</Form>
			</Container>
		</section>
		)
}
