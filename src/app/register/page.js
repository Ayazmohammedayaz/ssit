"use client";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
export default function RegisterPage(){

    const[userCreated]=useState(true);
    return (
        <section className="mt-8">
          <h1 className="text-center text-primary text-4xl mb-4">
            Register </h1>

            {userCreated && (
        <div className="my-4 text-center">
          User created.<br />
          Now you can{' '}
          <Link className="underline" href={'/login'}>Login &raquo;</Link>
        </div>
      )}
            <form className="block max-w-xs mx-auto">
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password" />
            <button type="submit" >Register</button>
            <div className="my-4 text-center text-gray-500"> or login with provider </div>
            <button className="flex gap-4 justify-center">
 
                <Image src={'/fgoogle.jpeg'} alt={''} width={24} height={24} ></Image>
                Login with google</button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing account?{' '}
          <Link className="underline" href={'/login'}>Login here &raquo;</Link>
        </div>
            </form>
            </section>
    )
}