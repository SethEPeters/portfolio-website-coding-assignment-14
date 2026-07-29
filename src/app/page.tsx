'use client';

import Button from '../components/Button';
import Text from '../components/Text';

export default function Home() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <a href="/work">
          <Button label="Work" background_colour="#37b1bc" state={true} />
        </a>
        <a href="/skills">
          <Button label="Skills" background_colour="#37b1bc" state={true} />
        </a>
        <a href="/resources">
          <Button label="Resources" background_colour="#37b1bc" state={true} />
        </a>
        <a href="/setup">
          <Button label="Developer Setup" background_colour="#37b1bc" state={true} />
        </a>
      </div>
      <Text label="Seth Peters Portfolio" background_colour="#6edaed" state={true}></Text>
      <Text
        label="My name is Seth Peters and I am a student at Red River College Polytechinc, as well as a graduate from the University of Manitoba. In this site you will find a summary of my skills alongside a few projects that I think show the extent of my skills"
        background_colour="#e6a358"
        state={true}
      ></Text>
    </div>
  );
}
