'use client';

import Button from '../../components/Button';
import Text from '../../components/Text';
import Card from '../../components/Card';
import Link from 'next/link';

import image1 from '../../images/sethsgithub.png';

export default function Home() {
  return (
    <div>
      <Link href="/..">
        <Button label="Back" background_colour="#b6c9ca" state={true} />
      </Link>
      <Text label="Seth Peters Resources" background_colour="#e6a358" state={true}></Text>
      <Text label="Seth Peters Resources" background_colour="#28e622" state={true}></Text>
      <Card
        src={image1.src}
        state={true}
        background_colour="#3594b9"
        title="GitHub Account"
        description="Here is my account that show some of my other projects that I have done in class"
      ></Card>
      <a href="https://github.com/SethEPeters">
        <Button label="Check Out The Site" background_colour="#dceaeb" justify_content="center" state={true}></Button>
      </a>
    </div>
  );
}
