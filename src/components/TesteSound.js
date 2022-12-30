import useSound from 'use-sound';
import boopSfx from "../assets/Dusk-Till-Dawn.mp3";


const BoopButton = () => {
  const [play] = useSound(boopSfx); 


  return <button onClick={play}>Boop!</button>;
};
export default BoopButton;