import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

import './topbar.css';

export default function Topbar() {
  return (
    <div className='topbar-container'>
      <div className="topbar-left">
        <span className="logo">LogoSocial</span>
      </div>

      <div className="topbar-center">
        <div className="search-box">
          <SearchIcon className='search-icon' />
          <input type="text" placeholder='Search for friend, post or video' className='search-input' />
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-right">
          <span className="topbar-link">Home Page</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <PersonIcon />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <ChatIcon />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-item">
            <CircleNotificationsIcon />
            <span className="topbar-icon-badge">1</span>
          </div>
        </div>

        <img src="../assets/person/1.jpeg" alt="" className='topbar-image' />
      </div>
    </div>
  );
}