import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      Hello World. <Link href="/about">About</Link>
      <img src="/img1.jpg" alt='' />
    </div>
  )
}
