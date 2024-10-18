import ProfileLayout from "./profile-layout"
export const metadata = {
  title: "User Profile",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProfileLayout>
      {children}
    </ProfileLayout>
  )
};

export default Layout;


