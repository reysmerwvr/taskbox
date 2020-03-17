import React from 'react';

import Avatar from '../components/Avatar/Avatar';

export default {
  component: Avatar,
  title: 'Avatar',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const avatarData = {
  src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
};

export const Default = () => <Avatar src={avatarData.src} />;

export const Inactive = () => (
  <Avatar src={avatarData.src} status="inactive" />
);

export const HiddenAvatar = () => <Avatar src={avatarData.src} avatarDisplay="none" />;
