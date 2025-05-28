import { Bell, Search} from 'lucide-react';
import head from '../images/head.avif';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <h1 className='navbar-logo'>Health<span className='navbar-logo-sm'>care.</span></h1>
      </div>
      <div className='navbar-search'>
        <Search className='search-icon'/>
        <input type="text" placeholder='Search' />
      </div>
      <div className='navbar-notification'>
        <Bell />
      </div>
      <div className='flex items-center'>
        <div className='mr-10'>
          <img src={head} className='w-8 h-8' />
        </div>
        <div>
          <button className='text-4xl'>+</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
