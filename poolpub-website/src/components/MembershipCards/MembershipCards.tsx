import React from 'react';
import styles from './MembershipCards.module.css';
import Image from 'next/image';


interface MembershipCardsProps {
  imageNormal?: string;
  imageMember?: string;
}

export default function MembershipCards({
  imageNormal='/ImageNormal.png',
  imageMember='/ImageMember.png',
}: MembershipCardsProps) {
  return (
    <div className={styles.containerMembership}>
      <div className={styles.cardsMembership}>
        <Image src={imageNormal} alt="Membership Normal" height={600} width={400} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.cardsMembership}>
        <Image src={imageMember} alt="Membership Member" height={600} width={300} />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}