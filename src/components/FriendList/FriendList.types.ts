export interface Friend {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export interface FriendsInfoProps {
  friends: Friend[];
}
