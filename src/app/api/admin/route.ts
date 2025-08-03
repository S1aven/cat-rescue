import {supabase} from '@/lib/db';
import {NextResponse} from 'next/server';

export async function POST(request: Request) {
  const newCat = await request.json();
  const {data, error} = await supabase
    .from('cats')
    .insert(newCat)
    .select();

  if (error)
    return NextResponse.json(
      {error},
      {status: 400}
    );

  return NextResponse.json(data[0], {status: 201});
}