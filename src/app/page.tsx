import Button from '../components/Button';

export default function Home() {
  return (
    <div>
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
      <h1>Seth Peters Portfolio</h1>
      <p>
        My name is Seth Peters and I am a full stack web developer who gained their experience from Red River College
        Polytechnic and The University of Manitoba
      </p>

      <h2>Check out...</h2>
    </div>
  );
}
