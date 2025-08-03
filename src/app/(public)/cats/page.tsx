import CatCard from '@/app/components/CatCard/CatCard';
import {Cat} from "@/app/components/CatCard/types";
import {getCats} from "@/app/api/cats/route";

export default async function CatsPage() {
  const cats = await getCats();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Наши котики</h1>
      {cats.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cats.map((cat: Cat) => (
            <CatCard key={cat.id} cat={cat}/>
          ))}
        </div>
      ) : (
        <p>Котиков не найдено 😿</p>
      )}
    </div>
  );
}