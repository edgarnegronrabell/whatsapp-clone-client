import React, { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import './Sidebar.css';

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'


export default function Sidebar({ id }) {
	const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
	const conversationsOpen = activeKey === CONVERSATIONS_KEY
	
	return (
		<section
			className="SidebarSection">
			<Tab.Container  
				activKey={activeKey} 
				onSelect={setActiveKey}>
				<Nav variant="tabs">
					<Nav.Item>
						<Nav.Link 
							eventKey={CONVERSATIONS_KEY}>
							Conversations
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link 
							eventKey={CONTACTS_KEY}>
							Contacts
						</Nav.Link>
					</Nav.Item>
				</Nav>
				<Tab.Content
					className="tab-content">
					<Tab.Pane eventKey={CONVERSATIONS_KEY}>
						<Conversations />
					</Tab.Pane>
					<Tab.Pane eventKey={CONTACTS_KEY}>
						<Contacts />
					</Tab.Pane>
				</Tab.Content>
				<div className="p-2 border-top border-right small">
				Your Id: <span className="text-muted">{id}</span>
				</div>
				<Button 
					className="rounded-0">
				New {conversationsOpen ? 'Conversation' : 'Contact' }
				</Button>
			</Tab.Container>
			
			<Modal>
			{conversationsOpen ?
				<NewConversationModal /> :
				<NewContactModal />
			}
			</Modal>
	 	</section>
	)
}
