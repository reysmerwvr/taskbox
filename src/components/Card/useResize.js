import { useState, useEffect } from 'react';

export default () => {
  const [, setWidth] = useState(window.innerWidth);
  const [avatarDisplay, setAvatarDisplay] = useState('flex');
  function updateWidthAndHeight() {
    setWidth(window.innerWidth);
    if (window.innerWidth <= 160) {
      setAvatarDisplay('none');
    } else {
      setAvatarDisplay('flex');
    }
  }
  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });
  return [avatarDisplay];
};
