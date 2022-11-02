import Link from "next/link";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/header"), {
  suspense: true,
});

export default function Home({ headerId }: any) {
  return (
    <div>Home page</div>
  )
}