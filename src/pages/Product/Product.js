import { Link } from 'react-router-dom';
import Chart from '../../components/charts/Chart';
import { productData } from '../../helpers/dataChart';
import './product.css';


const Product = () => {
    return (
        <div className='product'>
            <div class='productTitleContainer'>
                <h1 className='productTitle'>Product</h1>
                <Link to='./newproduct'>
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>

            <div className='productTop'>
                <div className='productTopLeft'>
                    <Chart data={ productData } dataKey='Sales' title='Sales Performance' />
                </div>
                <div className='productTopRight'>
                    <div className='productInfoTop'>
                        <img src='https://as01.epimg.net/meristation/imagenes/2021/06/25/betech/1624657908_253233_1624658099_noticia_normal_recorte1.jpg' alt='airpods' className='productInfoImg' />
                        <span className='productName'>Apple Airpods</span>
                    </div>
                    <div className='productInfoBottom'>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>id: </span>
                            <span className='productInfoValue'>123</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>sales:</span>
                            <span className='productInfoValue'>5.123</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>active:</span>
                            <span className='productInfoValue'>yes</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>in stock:</span>
                            <span className='productInfoValue'>no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='productBottom'></div>

        </div>
    )
}

export default Product;
