import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MY FIRST NEXT JS APP",
};
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>;
}
