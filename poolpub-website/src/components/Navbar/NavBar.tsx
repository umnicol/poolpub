import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';

interface NavLink {
  href: string;
  label: string;
}

const links = [
  { href: "/activities", label: "Activities" },
  { href: "/membership", label: "Membership" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book" },
];

interface NavBarProps {
  logo?: string;
}

export default function NavBar({
  logo = '/poolpub-logo.png'
}: NavBarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
            <Image src={logo} alt="Pool Pub logo" height={40} width={80}/>
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
      </ul>
    </nav>
  );
}
