import React from 'react';

import Card from '../components/Card/Card';

export default {
  component: Card,
  title: 'Card',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const cardData = {
  src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  title: 'Test Title',
  subtitle: 'Test Subtitle',
};

export const Default = () => (
  <Card
    src={cardData.src}
    title={cardData.title}
    subtitle={cardData.subtitle}
  />
);

export const FixedSize = () => (
  <div>
    <Card
      src={cardData.src}
      title={cardData.title}
      subtitle={cardData.subtitle}
      style={{ maxHeight: '52px', maxWidth: '180px' }}
    />
    <Card
      src={cardData.src}
      title={cardData.title}
      subtitle={cardData.subtitle}
      style={{ maxHeight: '52px', maxWidth: '160px' }}
    />
    <div style={{ width: '100px' }}>
      <Card
        src={cardData.src}
        title={cardData.title}
        subtitle={cardData.subtitle}
      />
    </div>
  </div>
);
