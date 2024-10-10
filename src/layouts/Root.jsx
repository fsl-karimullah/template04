import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import Design from '../components/Design/Design';
import Customer from '../components/Customer/Customer';
import Footer from '../components/Footer/Footer';
import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Root() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <>
      <Header />
      <Services />
      <Design />
      <Customer />
      <Footer />

      {isVisible && (
       <button
       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
       className="fixed bottom-6 right-6 bg-[#000000] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-[#000000] transition duration-300 ease-in-out"
       aria-label="Back to top"
     >
       <FaArrowUp className="w-4 h-4" />
     </button>
      )}
        </>
  );
}