import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-orange-100 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/public" className="text-2xl font-bold text-orange-600">Котики ждут дом</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/about" className="hover:text-orange-500">О нас</Link></li>
            <li><Link href="/src/app/(public)/cats/cats" className="hover:text-orange-500">Наши котики</Link></li>
            <li><Link href="/contacts" className="hover:text-orange-500">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}