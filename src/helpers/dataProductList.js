import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const columnFunction = (state, setState) => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'product',
          headerName: 'Product',
          width: 200,
          renderCell: ({row}) => {
              return (
                <div className='producListdata'>
                    <img src={ row.img } alt={row.name}
                    className='productListaImage'
                    />
                    {row.name}
                </div>
              )
          },  
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: ({row}) => {

                const handleDelete = (id) => {
                    setState( state.filter( user => user.id !== id ) );
                }  
                return (
                    <>
                        <Link to={'/product/' + row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline 
                            className='productListDelete'
                            onClick={ () => handleDelete(row.id) }
                        />
                    </>
                  )    
            },  
        },
    ];
    return columns;
}


export const rows = [
    { 
        id: 1, 
        name: 'Apple Airpods', 
        img: 'https://s03.s3c.es/imag/_v0/770x420/d/7/8/airpods-pro-4.jpg',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 2, 
        name: 'Apple Airpods', 
        img: 'https://s03.s3c.es/imag/_v0/770x420/d/7/8/airpods-pro-4.jpg',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 3, 
        name: 'Apple Airpods', 
        img: 'https://s03.s3c.es/imag/_v0/770x420/d/7/8/airpods-pro-4.jpg',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 4, 
        name: 'Apple Airpods', 
        img: 'https://s03.s3c.es/imag/_v0/770x420/d/7/8/airpods-pro-4.jpg',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 5, 
        name: 'Apple Airpods', 
        img: 'https://s03.s3c.es/imag/_v0/770x420/d/7/8/airpods-pro-4.jpg',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 6, 
        name: 'Apple Airpods', 
        img: 'https://s03.s3c.es/imag/_v0/770x420/d/7/8/airpods-pro-4.jpg',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 7, 
        name: 'Apple Airpods', 
        img: 'https://s03.s3c.es/imag/_v0/770x420/d/7/8/airpods-pro-4.jpg',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 8, 
        name: 'Apple Airpods', 
        img: 'https://s03.s3c.es/imag/_v0/770x420/d/7/8/airpods-pro-4.jpg',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 9, 
        name: 'Apple Airpods', 
        img: 'https://s03.s3c.es/imag/_v0/770x420/d/7/8/airpods-pro-4.jpg',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 10, 
        name: 'Apple Airpods', 
        img: 'https://s03.s3c.es/imag/_v0/770x420/d/7/8/airpods-pro-4.jpg',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },

]