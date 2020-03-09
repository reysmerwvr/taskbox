import React from 'react';

export default () => {
  const [, setWidth] = React.useState(window.innerWidth);
  const [avatarDisplay, setAvatarDisplay] = React.useState('flex');
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    if (window.innerWidth <= 160) {
      setAvatarDisplay('none');
    } else {
      setAvatarDisplay('flex');
    }
  };
  React.useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });
  return [avatarDisplay];
};
