import Button from '../../components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/..">
        <Button label="Back" background_colour="#b6c9ca" state={true} />
      </Link>
      <h1>Seth Peters Resources</h1>
      <p>
        My name is Seth Peters and I am a full stack web developer who gained their experience from Red River College
        Polytechnic and The University of Manitoba
      </p>
    </div>
  );
}
