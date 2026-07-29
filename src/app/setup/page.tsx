'use client';

import Button from '../../components/Button';
import Text from '../../components/Text';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Text label="Seth Peters Developer Setup" background_colour="#e6a358" state={true}></Text>
      <Link href="/..">
        <Button label="Back" background_colour="#b6c9ca" state={true} />
      </Link>
      <Text label="My setup for VsCode has tools for the following" background_colour="#28e622" state={true}></Text>
      <ul>
        <li>
          <Text label="Auto Close Tag" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Container Tools" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Debugger for Java" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Extension Pack for Java" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Docker" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="endwise" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Github Copilot" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Gradle for Java" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Java" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Language Support for Java" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Live Preview" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Maven for Java" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="PHP Intelephense" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Pokemon-theme" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Project Manager for Java" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Rainbow CSV" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Ruby LSP" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Ruby Solargraph" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="SQLite" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Test Runner for Java" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="vscode-gemfile" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="vscode-pokemon" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="WSL" background_colour="#e6a358" state={true}></Text>
        </li>
      </ul>
      <Text label="Via my terminal I use" background_colour="#28e622" state={true}></Text>
      <ul>
        <li>
          <Text label="Git" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="npx / Node.js" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="npm" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Husky" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="Prettier" background_colour="#e6a358" state={true}></Text>
        </li>
        <li>
          <Text label="vitest" background_colour="#e6a358" state={true}></Text>
        </li>
      </ul>
      <Text label="My preferred editor font is" background_colour="#28e622" state={true}></Text>
      <ul>
        <li>
          <Text label="Consolas, 'Courier New', monospace" background_colour="#e6a358" state={true}></Text>
        </li>
      </ul>
    </div>
  );
}
