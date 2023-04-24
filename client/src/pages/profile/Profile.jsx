import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rigthbar';

import './profile.css';

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img className='profile-cover-img' src="assets/post/3.jpeg" alt="" />
              <img className='profile-user-img' src="assets/person/7.jpeg" alt="" />
            </div>
            <div className="profile-info">
              <h4 className='profile-info-name'>The Devs</h4>
              <span className="profile-info-desc">Hello my friends</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}
