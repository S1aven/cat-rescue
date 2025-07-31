import { supabase } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase.from('cats').select('*');
  return NextResponse.json({ data, error });
}