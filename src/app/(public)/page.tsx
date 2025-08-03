import Header from '@/app/components/Header/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Дадим котикам второй шанс!</h1>
          <p className="text-xl mb-8">Мы спасаем кошек и помогаем им найти любящих хозяев</p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600">
            Посмотреть котиков
          </button>
        </div>
      </section>
    </main>
  );
}
