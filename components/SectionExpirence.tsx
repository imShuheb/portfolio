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
        const experience = experiences[activeTab];
        return (
            <div className={`content ${activeTab === 0 ? 'd-block' : 'd-none'}`} key={activeTab}>
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
        );
    };

    return (
        <section className='section-expirence' id='jobs'>
            <div className="numbered-heading d-flex align-items-center fade-in">
                <h2>Where I&apos;ve Worked</h2>
            </div>

            <div className="inner-tabs d-flex">
                <div className="container-fulid">
                    <div className="tab fade-in">
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
