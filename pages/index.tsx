import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      Hello World. <Link href="/about">About</Link>
      <Image src="/img1.jpg" alt='' width='100' height='100'/>
    </div>
    
  )
}
