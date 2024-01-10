import Link from 'next/link'
import React, { useState } from 'react'

function SectionExpirence() {
    const [tab, setTabs] = useState<number>(0)

    return (
        <section className='section-expirence' id='jobs'>
            <div className="numbered-heading d-flex align-items-center fade-in">
                <h2>Where I've Worked</h2>
            </div>

            <div className="inner-tabs d-flex">
                <div className="tab fade-in">
                    <button className={`tab-button ${tab === 0 ? 'active' : ''}`} onClick={() => setTabs(0)}>Kandra Digital</button>
                </div>

                <div className="tab-content">

                    <div className={`content ${tab === 0 ? 'd-block' : 'd-none'} fade-in`}>
                        <p className='tab-heading'>Full Stack Dev
                            <span className='green'> @&nbsp;
                                <Link href={'https://www.kandradigital.com/'} target='_blank' rel='nofollow' className="underline-on-hover">
                                    Kandra Digital
                                </Link>
                            </span>
                        </p>

                        <p className="range">
                            Oct 2022 - Present
                        </p>
                        <ul>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet repudiandae eaque dolorum possimus facilis dolor quam accusantium mollitia necessitatibus ducimus! Facilis beatae eum tenetur quaerat perspiciatis quam eligendi illum labore?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionExpirence
