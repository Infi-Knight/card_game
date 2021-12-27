import * as React from 'react';
import useSound from 'use-sound';
import soundDisableSound from 'assets/audio/disable-sound.mp3';
import soundEnableSound from 'assets/audio/enable-sound.mp3';
import { ReactComponent as SoundOffIcon } from 'assets/soundOff.svg';
import { ReactComponent as SoundOnIcon } from 'assets/soundOn.svg';
import { useGameConfig } from 'context/ConfigContext';

export function SoundToggle(): JSX.Element {
  const { soundEnabled, setSoundEnabled } = useGameConfig();
  const [playSoundEnabledSound] = useSound(soundEnableSound, { volume: 0.25 });
  const [playSoundDisabledSound] = useSound(soundDisableSound, { volume: 0.25 });
  const ariaLabelAndTitle = soundEnabled ? 'Disable sounds' : 'Enable sounds';

  const handleSoundToggle = () => {
    soundEnabled ? playSoundDisabledSound() : playSoundEnabledSound();
    setSoundEnabled(!soundEnabled);
  };

  return (
    <button
      aria-label={ariaLabelAndTitle}
      title={ariaLabelAndTitle}
      type="button"
      onClick={handleSoundToggle}
      className="focus:outline-white rounded-lg p-3"
    >
      {soundEnabled ? (
        <SoundOnIcon className="fill-current text-dark-yellow w-6 h-6" />
      ) : (
        <SoundOffIcon className="fill-current text-dark-yellow h-6 w-6" />
      )}
    </button>
  );
}
