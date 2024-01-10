import { useEffect } from 'react';

const FadeInOnScroll = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Change the threshold as needed

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect(); // Cleanup when component unmounts
        };
    }, []);

    return null;
};

export default FadeInOnScroll;
