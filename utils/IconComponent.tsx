import iconLibrary from "./iconLibrary";

const IconComponent = ({
  iconName,
  size = 30,
}: {
  iconName: string;
  size?: number;
}) => {
  const Icon = iconLibrary[iconName as keyof typeof iconLibrary];

  return Icon ? <Icon size={size} /> : <span>Icon not found</span>;
};

export default IconComponent;
