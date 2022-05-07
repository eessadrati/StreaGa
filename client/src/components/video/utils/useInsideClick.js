import { useEffect } from 'react';

const useInsideClick = (ref,exceptRef, callback) => {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && ref.current.contains(e.target) && !exceptRef.current.contains(e.target)) {
                callback(); //Do what you want to handle in the callback
                
                
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });
};

export default useInsideClick;