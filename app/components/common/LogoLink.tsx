"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useParams } from "next/navigation";

const LogoLink = () => {
  const { lang } = useParams();
  return (
    <Link href={`/${lang}`}>
      <Logo variant="isologo" />
    </Link>
  );
};

export default LogoLink;
