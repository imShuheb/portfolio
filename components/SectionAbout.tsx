import Image from 'next/image'
import React from 'react'
import photo from '../public/shuheb.jpg'

function SectionAbout() {
    return (
        <section className='about-section' id='about'>

            <div className="numbered-heading d-flex align-items-center fade-in">
                <h2>About me</h2>
            </div>

            <div className="inner fade-in">
                <div className='inner-data'>
                    <p>
                        I embarked on my coding journey during high school, and ever since, it has been a passion that fuels my every day. The world of development, the art of writing logic, and the intricacies of problem-solving have <span className='green'>captivated me fully</span>.
                    </p>
                    <p>
                        I find profound joy in crafting solutions and bringing ideas to life through code. Whether it's creating <span className='green'>seamless user experiences</span> or architecting <span className='green'>robust backend systems</span>, I immerse myself in every aspect of development, consistently seeking to <span className='green'>learn and grow</span>.
                    </p>
                    <p>
                        My commitment to this field extends beyond just writing code; it's about building meaningful connections between technology and people. This dedication drives me to create applications that not only <span className='green'>function flawlessly</span> but also resonate with users on a <span className='green'>deeper level</span>.
                    </p>

                    {/* <p>
                        Outside of coding, you might find me exploring new technologies, contributing to open-source projects, or simply enjoying a good book while sipping on a cup of coffee.
                    </p> */}
                    <ul>
                        <li>Javascript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>NextAuth</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>AWS (EC2, Amplify)</li>
                        <li>Security (WAF)</li>
                        <li>CDN (Cloudflare)</li>
                    </ul>
                </div>

                <div className="image-container fade-in">
                    <div className="image-wrapper">
                        <Image src={photo} alt="" width={280} height={280} layout="fixed" />
                        <div className="hover-line"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionAbout