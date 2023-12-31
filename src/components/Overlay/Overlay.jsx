// IMPORT PACKAGES
import { useEffect } from 'react';

// IMPORT STYLES
import './Overlay.scss';

// OVERLAY COMPONENT
function Overlay({ isActive, onClose, ...props }) {
  // HANDLER CLOSE BY ESC BUTTON
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    if (isActive) {
      document.addEventListener('keydown', handleEscClose);
      return () => document.removeEventListener('keydown', handleEscClose);
    }
  }, [isActive, onClose]);

  // HANDLER CLOSE BY CLICK ON OVERLAY
  const closeByClickOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`overlay ${isActive ? 'overlay_active' : ''}`}
      onMouseDown={closeByClickOnOverlay}
    >
      {props.children}
    </div>
  );
}

export default Overlay;
