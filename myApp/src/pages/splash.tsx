import {  IonPage,IonButton } from '@ionic/react';

import './Splash.css';

const Splash: React.FC = () => {
  return (
    <IonPage className='bg'>
  <IonButton className='button' size='small'>Default</IonButton>
    </IonPage>
  );
};

export default Splash;
