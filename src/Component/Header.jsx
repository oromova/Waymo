import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='w-[1440px] h-[70px]'>
        <div className='flex justify-between'>
          <div>
            <div>
              <a href="/">Waymo</a>
            </div>
            <div>
              <ul>
                <li>
                  <Link href="/destination">Destination</Link>
                </li>
                <li>
                  <Link>Gallery</Link>
                </li>
                <li>
                  Travel Packages
                </li>
                <li>
                  Contact
                </li>
              </ul>
            </div>
            <div></div>
          </div>

        </div>
      </div>

    </header>
  )
}

export default Header