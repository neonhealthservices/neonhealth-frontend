import dbConnect from '@/lib/mongodb';
import TeamMember from '@/models/TeamMember';
import { TeamMemberData } from '@/types/team';

type TeamMemberLean = TeamMemberData & {
  _id: { toString: () => string };
  createdAt?: Date;
  updatedAt?: Date;
};

export const defaultTeamMembers: TeamMemberData[] = [
  {
    name: 'Dr. Daniel Ekanem',
    role: 'Founder & Lead Cardiologist',
    fullBio:
      'Dr. Ekanem leads the cardiovascular team, combining specialist diagnostics with practical long-term care plans. He works closely with patients and families to build treatment pathways that are timely, clear, and outcome-focused.',
    image: '/images/man-in-suit.png',
    imageAlt: 'Portrait of Dr. Daniel Ekanem',
    profileUrl: 'https://www.linkedin.com',
    order: 1,
    isActive: true,
  },
  {
    name: 'Dr. Amara Okon',
    role: 'Consultant Internal Medicine',
    fullBio:
      'Dr. Okon manages internal medicine consultations across outpatient and inpatient pathways. Her work centers on clear diagnosis, risk reduction, and personalized follow-up that helps patients stay on track after each visit.',
    image: '/images/lady.png',
    imageAlt: 'Portrait of Dr. Amara Okon',
    order: 2,
    isActive: true,
  },
  {
    name: 'Nurse Grace Udo',
    role: 'Head of Nursing Services',
    fullBio:
      'Nurse Grace leads bedside care quality, nursing protocols, and patient advocacy. She mentors frontline teams to maintain compassionate communication, safe transitions, and consistent standards throughout the patient journey.',
    image: '/images/pregnant-2.jpg',
    imageAlt: 'Portrait of Nurse Grace Udo',
    order: 3,
    isActive: true,
  },
  {
    name: 'Mr. Samuel Bassey',
    role: 'Operations & Patient Experience Lead',
    fullBio:
      'Samuel supports operational excellence from reception to discharge, ensuring appointments, communication, and support services run efficiently. His team helps patients navigate care quickly and confidently.',
    image: '/images/reception.png',
    imageAlt: 'Portrait of Mr. Samuel Bassey',
    profileUrl: 'https://www.linkedin.com',
    order: 4,
    isActive: true,
  },
];

export async function getTeamMembers(includeInactive = false): Promise<TeamMemberData[]> {
  try {
    await dbConnect();
    const filter = includeInactive ? {} : { isActive: true };
    const members = await TeamMember.find(filter).sort({ order: 1, createdAt: -1 }).lean<TeamMemberLean[]>();

    if (!members || members.length === 0) {
      return defaultTeamMembers;
    }

    return members.map((member) => ({
      _id: String(member._id),
      name: member.name,
      role: member.role,
      fullBio: member.fullBio || '',
      image: member.image,
      imageAlt: member.imageAlt,
      profileUrl: member.profileUrl || '',
      order: typeof member.order === 'number' ? member.order : 0,
      isActive: Boolean(member.isActive),
      createdAt: member.createdAt ? new Date(member.createdAt).toISOString() : undefined,
      updatedAt: member.updatedAt ? new Date(member.updatedAt).toISOString() : undefined,
    }));
  } catch (error) {
    console.error('Failed to load team members:', error);
    return defaultTeamMembers;
  }
}
