import Link from 'next/link'
import React from 'react'

function SectionContact() {
    return (
        <section className='section-contact' id='contact'>

            <div className="numbered-heading-4 overline">
                <h2>What &apos; s  Next ? </h2>
            </div>

            <h2 className='title'>Get In Touch</h2>

            <p>Open for conversation! Feel free to reach out for inquiries, collaborations, or just a friendly chat. I'm here and ready to connect.</p>

            <div className="d-flex justify-content-center scale-trans mt-5">
                <Link href={'mailto:mshuheb8@gmail.com'} className="button p-4 px-5">
                    Say Hello
                </Link>
            </div>
        </section >
    )
}

export default SectionContact