import {supabase} from '@/lib/db';
import {NextResponse} from 'next/server';

export async function GET() {
  const {data, error} = await supabase
    .from('cats')
    .select('*');

  if (error) {
    return NextResponse.json(
      {error: error.message},
      {status: 500}
    );
  }

  return NextResponse.json(data);
}

export async function getCats() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/cats`, {next: {revalidate: 60}});

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Ошибка загрузки котиков:", error);
    return [];
  }
}

export async function uploadImage(file: File) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from('cat-images')
    .upload(fileName, file);

  if (error) throw error;

  return supabase.storage
    .from('cat-images')
    .getPublicUrl(data.path);
}