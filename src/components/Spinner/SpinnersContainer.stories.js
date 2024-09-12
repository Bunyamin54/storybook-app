import React from 'react';
import SpinnersContainer from './SpinnersContainer';

export default {
  title: 'Components/SpinnersContainer',  // Hikayenin Storybook'ta başlık altında nasıl görüneceğini ayarlar.
  component: SpinnersContainer,           // Göstermek istediğiniz bileşen.
};

// Default hikaye
export const Default = () => <SpinnersContainer />;
