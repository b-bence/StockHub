import { Link, Route } from "react-router-dom";
import React, {useContext} from 'react';
import '../NewProfilePage/ProfilePageStyle.css';
import ProfileDetails from "./ProfilePageDetails"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StarsIcon from '@material-ui/icons/Stars';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const ProfilePage = (props) => {



	return (
	<React.Fragment>
	<div className="profilePage">
		<header class="header">
			<h2>Gajdos Tamás</h2>
		</header>

		<div className='profile-menu-body'>
			
			<div className="profile-cards">	
			<Link to="/newProfile/profileDetails">
				<div className="menu-title">
					<AccountCircleIcon fontSize="large" style={{color:"#1c2237"}}></AccountCircleIcon>
					<br></br>
					<div className="menu-text">Profile Details</div>
				</div>
			</Link>
				
			<Link>
				<div className="menu-title">
					<MonetizationOnIcon fontSize="large" style={{color:"#1c2237"}}></MonetizationOnIcon>
					<br></br>
					<div className="menu-text">Trade</div>
				</div>
			</Link>

			<Link>
				<div className="menu-title">
					<StarsIcon fontSize="large" style={{color:"#1c2237"}}></StarsIcon>
					<br></br>
					<div className="menu-text">Favourites</div>
				</div>
			</Link>

			<Link>
				<div className="menu-title">
					<ExitToAppIcon fontSize="large" style={{color:"#1c2237"}}></ExitToAppIcon>
					<br></br>
					<div className="menu-text">Logout</div>
				</div>
			</Link>
			</div>
			<ProfileDetails/>
		</div>
	</div>
</React.Fragment>

	);
}

export default ProfilePage;