import { NavLink } from 'react-router-dom'

// Styles
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard.svg'
import AddIcon from '../assets/add.svg'

function Sidebar(){
    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <div className='user'>
                    {/* Avatar and username (later) */}
                    <p>Hey user</p>
                </div>
                <nav className='links'>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                <img src={DashboardIcon} alt='dashboard icon'></img>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/create'>
                                <img src={AddIcon} alt='add project icon'></img>
                                <span>New Project</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar;