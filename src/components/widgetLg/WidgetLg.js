import './widgetLg.css';
//    className='widgetLgTable'
const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={ 'widgetLgButton ' + type }>{ type }</button>
    }


    return (
        <div className='widgetLg'>
             <h3 className='widgetLgTitle'>Latest transactions</h3>
             <table className='widgetLgTable'>
                 <tr  className='widgetLgTr'>
                    <th className='widgetLgTh'>Customer</th>
                    <th className='widgetLgTh'>Date</th>
                    <th className='widgetLgTh'>Amount</th> 
                    <th className='widgetLgTh'>Status</th>
                 </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://us.123rf.com/450wm/lyashenko/lyashenko1607/lyashenko160700112/61564750-joven-empresaria-con-tel%C3%A9fono-en-la-cafeter%C3%ADa-empresaria-exitosa-mujer-joven-con-el-tel%C3%A9fono-y-la-computad.jpg?ver=6' 
                        alt='customers' 
                        className='widgetLgImage'
                        />
                        <span className='widgetLgName'>Susan Carel</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Approved' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://mujermexico.com/wp-content/uploads/2019/12/1-10.jpg' 
                        alt='customers' 
                        className='widgetLgImage'
                        />
                        <span className='widgetLgName'>Susan Carel</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Declined' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://mujermexico.com/wp-content/uploads/2019/12/1-10.jpg' 
                        alt='customers' 
                        className='widgetLgImage'
                        />
                        <span className='widgetLgName'>Susan Carel</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Pending' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src='https://us.123rf.com/450wm/lyashenko/lyashenko1607/lyashenko160700112/61564750-joven-empresaria-con-tel%C3%A9fono-en-la-cafeter%C3%ADa-empresaria-exitosa-mujer-joven-con-el-tel%C3%A9fono-y-la-computad.jpg?ver=6' 
                        alt='customers' 
                        className='widgetLgImage'
                        />
                        <span className='widgetLgName'>Susan Carel</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Approved' />
                    </td>
                </tr>
             </table>
        </div>
    )
}

export default WidgetLg;

