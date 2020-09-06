import React, { useRef } from 'react';
import { Section, Container, Form } from 'react-bulma-components';


export default function Login() {
	const { Field, Control, Label, Input } = Form;

	const idRef = useRef()

	return (
		<Section>
			<Container>
				<Form>
					<Field>
						<Label>
							Enter Your Id
						</Label>
						<Control>
							<Input 
							type="text"
							ref={idRef}
							required>
							</Input>
						</Control>
					</Field>
				</Form>
			</Container>
		</Section>
		)
}
