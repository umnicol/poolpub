import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './NavBar.module.css';
import { auth, logout } from '<poolpub>/firebase';


interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "/activities", label: "Activities" },
  { href: "/membership", label: "Membership" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

interface NavBarProps {
  logo?: string;
}

export default function NavBar({
  logo = '/poolpub-logo.png',
}: NavBarProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe(); // Cleanup the auth state listener
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="Pool Pub logo" height={40} width={80} />
        </Link>
      </div>

      <ul className={styles.links}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} legacyBehavior>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}

        {isLoggedIn && (
          <li>
            <Link href="/profile" legacyBehavior>
              <a>My Profile</a>
            </Link>
          </li>
        )}

        {isLoggedIn ? (
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        ) : (
          <li>
            <Link href="/login" legacyBehavior>
              <a>Log In</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
