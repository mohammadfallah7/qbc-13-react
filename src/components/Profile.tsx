interface AvatarProps {
  size: number;
  person: { name: string; imageId: string };
}

const Avatar = ({ size, person }: AvatarProps) => {
  return (
    <img
      className="avatar"
      src={`https://react.dev/images/docs/scientists/${person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};

const Profile = () => {
  return (
    <Avatar size={100} person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} />
  );
};

export default Profile;
