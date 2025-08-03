import Image from 'next/image';
import Link from 'next/link';
import {Cat} from './types';

export default function CatCard({cat}: { cat: Cat }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Картинка кота */}
      <div className="relative h-48 w-full">
        <Image
          src={cat.image_url}
          alt={cat.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        {cat.is_adopted && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            Нашёл дом
          </div>
        )}
      </div>

      {/* Информация о коте */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{cat.name}</h3>
          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">
            {cat.age} {getAgeText(cat.age)}
          </span>
        </div>

        <p className="text-gray-600 mt-1">{cat.breed}</p>

        <p className="text-gray-700 mt-2 line-clamp-2">
          {cat.description}
        </p>

        <Link
          href={`/cats/${cat.id}`}
          className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}

// Вспомогательная функция для склонения возраста
function getAgeText(age: number): string {
  if (age % 10 === 1 && age !== 11) return 'год';
  if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age)) return 'года';
  return 'лет';
}