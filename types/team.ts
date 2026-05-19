export interface TeamMemberData {
  _id?: string;
  name: string;
  role: string;
  fullBio: string;
  image: string;
  imageAlt: string;
  profileUrl?: string;
  order: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}
