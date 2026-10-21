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

export default Avatar;
