import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const columnFunction = (state, setState) => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          renderCell: ({row}) => {
              return (
                <div className='userListUser'>
                    <img src={ row.avatar } alt={row.userName}
                    className='UserListaImage'
                    />
                    {row.userName}
                </div>
              )
          },  
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: ({row}) => {

                const handleDelete = (id) => {
                    setState( state.filter( user => user.id !== id ) )
                }

                return (
                  <>
                    <Link to='/'>
                        <button className='userListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline 
                        className='userListDelete'
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
        userName: 'Snow Berth', 
        avatar: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
        email: 'snow@gmail.com',
        status: 'active',
        transaction: '$120.00',
    },
    { 
        id: 2, 
        userName: 'Snow Berth', 
        avatar: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
        email: 'snow@gmail.com',
        status: 'active',
        transaction: '$120.00',
    },
    { 
        id: 3, 
        userName: 'Snow Berth', 
        avatar: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
        email: 'snow@gmail.com',
        status: 'active',
        transaction: '$120.00',
    },
    { 
        id: 4, 
        userName: 'Snow Berth', 
        avatar: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
        email: 'snow@gmail.com',
        status: 'active',
        transaction: '$120.00',
    },
    { 
        id: 5, 
        userName: 'Snow Berth', 
        avatar: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
        email: 'snow@gmail.com',
        status: 'active',
        transaction: '$120.00',
    },
    { 
        id: 6, 
        userName: 'Snow Berth', 
        avatar: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
        email: 'snow@gmail.com',
        status: 'active',
        transaction: '$120.00',
    },
    { 
        id: 7, 
        userName: 'Snow Berth', 
        avatar: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
        email: 'snow@gmail.com',
        status: 'active',
        transaction: '$120.00',
    },
    { 
        id: 8, 
        userName: 'Snow Berth', 
        avatar: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
        email: 'snow@gmail.com',
        status: 'active',
        transaction: '$120.00',
    },
    { 
        id: 9, 
        userName: 'Snow Berth', 
        avatar: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
        email: 'snow@gmail.com',
        status: 'active',
        transaction: '$120.00',
    },
    { 
        id: 10, 
        userName: 'Snow Berth', 
        avatar: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
        email: 'snow@gmail.com',
        status: 'active',
        transaction: '$120.00',
    },

]