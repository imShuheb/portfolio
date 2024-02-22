import React from 'react'
import socialMediaData from './others/SocialMedia'
import Link from 'next/link'

function Footer() {

    return (
        <footer>
            <div className="icons-list ">
                <ul className='w-100'>
                    {socialMediaData.map((socialMedia, index) => (
                        <li key={index}>
                            <Link href={socialMedia.link} target='_blank'>
                                {React.createElement(socialMedia.icon, { size: 20 })}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="desc">
                <Link href={'https://github.com/imShuheb'}>
                    <div>Desing & build by<span className='green    '> Mohammed Shuheb</span></div>
                </Link>
            </div>
        </footer>
    )
}

export default Footer
