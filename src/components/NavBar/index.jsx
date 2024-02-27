import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-5 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/Shopi'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/All'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Clothes'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Electronics'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Fornitures'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Toys'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    example@exm.com
                </li>
                <li>
                    <NavLink to='/MyOrders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/MyAccount'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/SigIn'>
                        Sig In
                    </NavLink>
                </li>
                <li>
                    carrito 0
                </li>
            </ul>
        </nav>
    )
}


export default NavBar