import {
  ProfileSectionTitleContainer,
  ProfileSectionTitleLine,
  ProfileSectionTitleNumber,
  ProfileSectionTitleText,
} from "./style";

interface Props {
  title: string;
  listLength: number;
}

const ProfileSectionTitle = ({ title, listLength }: Props) => {
  return (
    <ProfileSectionTitleContainer>
      <ProfileSectionTitleText>{title}</ProfileSectionTitleText>
      <ProfileSectionTitleNumber>({listLength})</ProfileSectionTitleNumber>
      <ProfileSectionTitleLine />
    </ProfileSectionTitleContainer>
  );
};

export default ProfileSectionTitle;
