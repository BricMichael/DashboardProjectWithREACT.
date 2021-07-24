import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topbarLeft'>
                    <span className='logo'>Company control</span>
                </div>
                <div className='topbarRight'>
                    <div className='topbarIconsContainer'>
                        <NotificationsNone />
                        <span className='topIconBagde'>2</span>
                    </div>
                    <div className='topbarIconsContainer'>
                        <Language />
                        <span className='topIconBagde'>2</span>
                    </div>
                    <div className='topbarIconsContainer'>
                        <Settings />
                    </div>
                    <img src='https://www.euroresidentes.com/empresa/gestion/wp-content/uploads/sites/15/2007/10/empresarios-mediaticos.jpg' alt='avatar' className='topAvatar' />
                </div>
            </div>
        </div>
    )
}

export default Topbar;
