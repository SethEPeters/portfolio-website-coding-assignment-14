'use client';

import Button from '../../components/Button';
import Text from '../../components/Text';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Text label="Seth Peters Skills" background_colour="#e6a358" state={true}></Text>
      <Link href="/..">
        <Button label="Back" background_colour="#b6c9ca" state={true} />
      </Link>
      <Text
        label="There are a variety of skills that I learnt while in School. Here is arundown of the things I learnt so far."
        background_colour="#28e622"
        state={true}
      ></Text>
      <ul>
        <li>
          <Text label="PHP" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="HTML" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="CSS" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="JavaScript" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Java" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Ruby" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="C#" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="C++" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="C" background_colour="#e6a358" state={true}></Text>
        </li>
      </ul>
    </div>
  );
}
