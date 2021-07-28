import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <h3 className='widgetSmTitle'>New Join Members</h3>
            <ul className='widgetSmList'>
                <li className='widgetSmItem'>
                    <img  
                    src='https://www.euroresidentes.com/empresa/gestion/wp-content/uploads/sites/15/2007/10/empresarios-mediaticos.jpg' 
                    alt='photoUser' 
                    className='widgetSmImg' 
                    />
                    <div  className='widgetSmUser'>
                        <span  className='widgetSmUserName'>Anna Keller</span>
                        <span  className='widgetSmUserTitle'>
                            Software Engineer
                        </span>
                    </div>
                    <button className='widgetSmButton'>
                            <Visibility />
                            &nbsp; Display
                    </button>
                </li>
                <li className='widgetSmItem'>
                    <img  
                    src='https://www.euroresidentes.com/empresa/gestion/wp-content/uploads/sites/15/2007/10/empresarios-mediaticos.jpg' 
                    alt='photoUser' 
                    className='widgetSmImg' />
                    <div  className='widgetSmUser'>
                        <span  className='widgetSmUserName'>Anna Keller</span>
                        <span  className='widgetSmUserTitle'>
                            Software Engineer
                        </span>
                    </div>
                    <button className='widgetSmButton'>
                            <Visibility />
                            &nbsp; Display
                    </button>
                </li>
                <li className='widgetSmItem'>
                    <img  
                    src='https://www.euroresidentes.com/empresa/gestion/wp-content/uploads/sites/15/2007/10/empresarios-mediaticos.jpg' 
                    alt='photoUser' 
                    className='widgetSmImg' />
                    <div  className='widgetSmUser'>
                        <span  className='widgetSmUserName'>Anna Keller</span>
                        <span  className='widgetSmUserTitle'>
                            Software Engineer
                        </span>
                    </div>
                    <button className='widgetSmButton'>
                            <Visibility />
                            &nbsp; Display
                    </button>
                </li>
                <li className='widgetSmItem'>
                    <img  
                    src='https://www.euroresidentes.com/empresa/gestion/wp-content/uploads/sites/15/2007/10/empresarios-mediaticos.jpg' 
                    alt='photoUser' 
                    className='widgetSmImg' />
                    <div  className='widgetSmUser'>
                        <span  className='widgetSmUserName'>Anna Keller</span>
                        <span  className='widgetSmUserTitle'>
                            Software Engineer
                        </span>
                    </div>
                    <button className='widgetSmButton'>
                            <Visibility />
                            &nbsp; Display
                    </button>
                </li>
                <li className='widgetSmItem'>
                    <img  
                    src='https://www.euroresidentes.com/empresa/gestion/wp-content/uploads/sites/15/2007/10/empresarios-mediaticos.jpg' 
                    alt='photoUser' 
                    className='widgetSmImg' />
                    <div  className='widgetSmUser'>
                        <span  className='widgetSmUserName'>Anna Keller</span>
                        <span  className='widgetSmUserTitle'>
                            Software Engineer
                        </span>
                    </div>
                    <button className='widgetSmButton'>
                            <Visibility />
                            &nbsp; Display
                    </button>
                </li>       
            </ul>
        </div>
    )
}

export default WidgetSm;
