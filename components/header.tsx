import { useState } from 'react';
import { PropsWithChildren } from 'react';
import Link from 'next/link';

type HeaderProps = {
  id: string;
} & PropsWithChildren

const Header = ({ children, id }: HeaderProps) => {
  const [count, setCount] = useState(0);
  return (
    <header>
      <button onClick={() => setCount(c => c + 1)}>Click me: {count}</button>
      <Link href="/">Home</Link>
      <Link href="/en-us">Products</Link>
      <p>{children}</p>
      <p>{id}</p>
    </header>
  )
}

export default Header;