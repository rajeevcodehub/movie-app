import { Link } from 'react-router-dom';
import NetfNetflix_Logo from '../resources/Netflix_Logo_PMS.png'

const Header = () => {
    return (
       <div className=''>
        <div className='absolute flex justify-between mx-16 my-4 '>
            <img className='h-20 w-25' src={NetfNetflix_Logo}/>
            <Link to='/login'  className='bg-red-700 rounded w-20 h-12 flex items-center justify-center'>Sign In</Link>
        </div>
        </div>
    )
}

export default Header;