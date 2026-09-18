import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToAnchor component handles smooth scrolling to hash anchors (e.g. /#services, /#how-i-work, /#selected-work)
 * across both direct page navigation and cross-route transitions.
 * If no hash is present, it scrolls smoothly to the top of the new page.
 */
export default function ScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove leading '#'
      const targetId = hash.replace('#', '');
      
      // Delay slightly to ensure destination DOM nodes are rendered and animations initialized
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    } else {
      // Direct route change with no hash -> scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}
