import Link from 'next/link';
import React from 'react';
import socialMediaData from '../others/SocialMedia';

function Left() {
  return (
    <div className='left d-none d-lg-block fade-in'>
      <ul>
        {socialMediaData.map((socialMedia, index) => (
          <li key={index}>
            <Link href={socialMedia.link} target='_blank'>
              {React.createElement(socialMedia.icon, { size: 20 })}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Left;
