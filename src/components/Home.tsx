// Home page of my Portfolio

import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          Welcome to my Portfolio
        </h1>
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full"
        />
      </section>
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center">About Me</h2>
        <p className="text-center">
          I am a Full Stack Developer with a passion for creating software
          solutions. I have a strong background in JavaScript, TypeScript, and
          Python. I am also familiar with React, Node.js, and Django. I am
          always eager to learn new technologies and improve my skills. I am
          looking for opportunities to work on exciting projects and grow as a
          developer.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <p className="text-center">
          Here are some of the projects I have worked on:
        </p>
        <ul className="flex flex-col items-center justify-center">
          <li className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-center">Project 1</h3>
            <p className="text-center">Description of Project 1</p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-center">Project 2</h3>
            <p className="text-center">Description of Project 2</p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-center">Project 3</h3>
            <p className="text-center">Description of Project 3</p>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center">Contact Me</h2>
        <p className="text-center">
          You can reach me at my email address:
          <a href="mailto:"></a>
        </p>
      </section>
    </main>
  );
};

export default Home;
