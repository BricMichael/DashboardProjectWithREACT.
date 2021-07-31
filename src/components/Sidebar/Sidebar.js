import './sidebar.css';
import { Link } from 'react-router-dom';
import { Timeline, TrendingUp, Home, PermIdentity, Storefront,
MailOutline, ChatBubbleOutline, WorkOutline, Report, 
AccountBalanceWallet, ChromeReaderMode, TripOrigin } from '@material-ui/icons';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <Home /> &nbsp;
                            Home
                        </li>
                        <li className='sidebarListItem '>
                            <Timeline /> &nbsp;
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp /> &nbsp;
                            Sales
                        </li>
                    </ul>
                </div>   
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                     <ul className='sidebarList'>
                         <li className='sidebarListItem'>
                             <PermIdentity /> &nbsp;
                             Users
                         </li>
                         <li className='sidebarListItem '>
                             <Storefront /> &nbsp;
                             Products
                         </li>
                         <li className='sidebarListItem'>
                            <AccountBalanceWallet /> &nbsp;
                            Transactions
                         </li>
                         <li className='sidebarListItem'>
                             <ChromeReaderMode /> &nbsp;
                             Reports
                         </li>
                     </ul>
                </div>  
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <MailOutline /> &nbsp;
                            Mail
                        </li>
                        <li className='sidebarListItem '>
                            <TripOrigin /> &nbsp;
                            Feedbac
                        </li>
                        <li className='sidebarListItem'>
                            <ChatBubbleOutline /> &nbsp;
                            Messages
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <WorkOutline /> &nbsp;
                            Manage
                        </li>
                        <li className='sidebarListItem '>
                            <Timeline /> &nbsp;
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <Report /> &nbsp;
                            Reports
                        </li>
                    </ul>
                </div>            
            </div>         
        </div>    
    )
}
export default Sidebar;
