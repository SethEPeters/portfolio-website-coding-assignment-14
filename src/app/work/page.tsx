'use client';

import Button from '../../components/Button';
import Text from '../../components/Text';
import Img from '../../components/Img';

import image1 from '../../images/thgevideogamereleasedatearchivecom.png';
import image2 from '../../images/sethpetersca.png';

export default function Home() {
  return (
    <div>
      <div>
        <Text label="Seth Peters Work" background_colour="#6edaed" state={true}></Text>
        <a href="/..">
          <Button label="Back" background_colour="#b6c9ca" justify_content="flex-start" state={true}></Button>
        </a>

        <Text label="The Video Game Release Date Archive Project" background_colour="#28e622" state={true}></Text>
        <Text
          label="In this project I used php, html, css and JavaScript to add and track the history of release dates across a variety of consoles. There is a search functionality alongside category sorting. In the PC category there is also a small video game I made in JavaScript"
          background_colour="#e6a358"
          state={true}
        ></Text>
        <Img
          src={image1.src}
          alt="The Video Game Release Date Archive"
          border_colour="#000000"
          state={true}
          justify_content="center"
        ></Img>
        <a href="https://www.thevideogamereleasedatearchive.com/">
          <Button label="Check Out The Site" background_colour="#dceaeb" justify_content="center" state={true}></Button>
        </a>
        <ul>
          <li>
            <Text label="- PHP" background_colour="#e6a358" state={true}></Text>
          </li>
          <li>
            <Text label="- HTML" background_colour="#e6a358" state={true}></Text>
          </li>
          <li>
            <Text label="- CSS" background_colour="#e6a358" state={true}></Text>
          </li>
          <li>
            <Text label="- JavaScript" background_colour="#e6a358" state={true}></Text>
          </li>
        </ul>
      </div>
      <div>
        <Text label="Seth Peters Portfolio Site V1" background_colour="#28e622" state={true}></Text>
        <Text
          label="In this project I used html and css to showcase some of my personal projects made outside of school"
          background_colour="#e6a358"
          state={true}
        ></Text>
        <Img
          src={image2.src}
          alt="The V1 portfolio site"
          border_colour="#000000"
          state={true}
          justify_content="center"
        ></Img>
        <a href="https://www.sethpeters.ca/">
          <Button label="Check Out The Site" background_colour="#dceaeb" justify_content="center" state={true}></Button>
        </a>
        <ul>
          <li>
            <Text label="- HTML" background_colour="#e6a358" state={true}></Text>
          </li>
          <li>
            <Text label="- CSS" background_colour="#e6a358" state={true}></Text>
          </li>
        </ul>
      </div>
    </div>
  );
}
