import Link from 'next/link';
import React, { useState } from 'react';
import { experiences } from './data/expirence'

function SectionExpirence() {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const renderTabButtons = () => {
        return experiences.map((experience, index) => (
            <button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
            >
                {experience.company}
            </button>
        ));
    };

    const renderTabContent = () => {
        return experiences.map((experience, index) => (
            <div
                key={index}
                className={`content ${activeTab === index ? 'd-block' : 'd-none'}`}
            >
                <p className='tab-heading'>
                    {experience.position}{' '}
                    <span className='green'>
                        @&nbsp;
                        <Link href={experience.website} target='_blank' rel='nofollow' className="underline-on-hover">
                            {experience.company}
                        </Link>
                    </span>
                </p>
                <p className="range">{experience.dateRange}</p>
                <ul>
                    {experience.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>
        ));
    };


    return (
        <section className='section-expirence' id='jobs'>
            <div className="numbered-heading d-flex align-items-center fade-in">
                <h2>Where I&apos;ve Worked</h2>
            </div>

            <div className="inner-tabs d-flex">
                <div className="container-fulid overflow-x-scroll overflow-y-hidden col-sm-12 col-md-4">
                    <div className="tab">
                        {renderTabButtons()}
                    </div>
                </div>

                <div className="tab-content overflow-x-auto fade-in">
                    {renderTabContent()}
                </div>
            </div>

        </section>
    );
}

export default SectionExpirence;
