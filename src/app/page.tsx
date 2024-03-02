import Image from "next/image";
import Link from "next/link";
import HomeSection from '../components/Home';
import React, { createContext } from 'react';




export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <HomeSection />

    </main>
  );
}
