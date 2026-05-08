import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Review from '@/models/Review';

export async function GET() {
  try {
    await dbConnect();
    const reviews = await Review.find({}).sort({ createdAt: -1 });
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();

    if (!body.patientName || !body.content) {
      return NextResponse.json({ error: 'Patient name and content are required' }, { status: 400 });
    }

    const review = await Review.create({
      patientName: body.patientName,
      content: body.content,
      rating: body.rating || 5,
      title: body.title || '',
      service: body.service || ''
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 });
  }
}
