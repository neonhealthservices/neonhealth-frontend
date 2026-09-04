import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import TeamMember from '@/models/TeamMember';
import { defaultTeamMembers } from '@/lib/team';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const includeInactive = request.nextUrl.searchParams.get('includeInactive') === '1';
    const filter = includeInactive ? {} : { isActive: true };

    const members = await TeamMember.find(filter).sort({ order: 1, createdAt: -1 });

    if (!members.length && !includeInactive) {
      return NextResponse.json(defaultTeamMembers);
    }

    return NextResponse.json(members);
  } catch (error) {
    console.error('Failed to fetch team members:', error);
    return NextResponse.json({ error: 'Failed to fetch team members' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();

    const requiredFields = ['name', 'role', 'image', 'imageAlt'];
    const missing = requiredFields.filter((f) => {
      const v = (body as any)[f];
      return v === undefined || v === null || (typeof v === 'string' && v.trim() === '');
    });

    if (missing.length) {
      console.error('Missing required team member fields:', missing, 'body:', body);
      return NextResponse.json({ error: 'Missing required team member fields', missing }, { status: 400 });
    }

    const createdMember = await TeamMember.create({
      name: body.name,
      role: body.role,
      fullBio: body.fullBio,
      image: body.image,
      imageAlt: body.imageAlt,
      profileUrl: body.profileUrl || '',
      order: Number.isFinite(Number(body.order)) ? Number(body.order) : 0,
      isActive: body.isActive !== false,
    });

    return NextResponse.json(createdMember, { status: 201 });
  } catch (error) {
    console.error('Failed to create team member:', error);
    return NextResponse.json({ error: 'Failed to create team member' }, { status: 500 });
  }
}
