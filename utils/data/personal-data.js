export const getPersonalDataFromPortfolio = (portfolioData) => {

  const heroSection = portfolioData?.sections?.find(
    (section) => section.type === 'hero'
  );

  const contactSection = portfolioData?.sections?.find(
    (section) => section.type === 'contact'
  );
  const aboutSection = portfolioData?.sections?.find(
    (section) => section.type === 'about'
  );
  const experienceSection = portfolioData?.sections?.find(
    (section) => section.type === 'experience'
  );
  const projectSection = portfolioData?.sections?.find(
    (section) => section.type === 'projects'
  );
  const educationSection = portfolioData?.sections?.find(
    (section) => section.type === 'education'
  );
  const skillsSection = portfolioData?.sections?.find(
    (section) => section.type === 'skills'
  );

  return {
    name: heroSection?.title || 'Ali Hassan',
    profile: aboutSection?.data?.imageUrl,
    designation: heroSection?.designation,
    description: aboutSection?.data?.aboutMe || '',
    skills: heroSection?.data?.skills,
    email: contactSection?.data?.email || '',
    phone: contactSection?.data?.phone || '',
    address: contactSection?.data?.address || '',
    github: contactSection?.data?.github || '',
    facebook: contactSection?.data?.facebook || '',
    linkedIn: contactSection?.data?.linkedIn || '',
    twitter: contactSection?.data?.twitter || '',
    stackOverflow: contactSection?.data?.stackOverflow || '',
    leetcode: contactSection?.data?.leetcode || '',
    devUsername: contactSection?.data?.devUsername || '',
    experiences: experienceSection?.data?.experiences || [],
    resume: contactSection?.data?.resume || '',
    projectData: projectSection?.data?.projects || [],
    educations: educationSection?.data?.education || [],
    skillsData: skillsSection?.data?.skills || [],
  };
};
