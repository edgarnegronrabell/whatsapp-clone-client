import React from 'react'
import Sidebar from './Sidebar';
import './Dashboard.css'

export default function Dashboard({ id }) {
	return (
		<div 
			className="DashboardSection">
			<Sidebar id={id} />
		</div>
	)
}
