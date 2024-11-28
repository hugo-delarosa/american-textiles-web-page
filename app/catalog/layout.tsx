import Header from "@/app/ui/general/header";
import {navigation, logo} from "@/app/lib/data";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header
        logo={logo}
        navigation={navigation}
      />
      {children}
    </div>
  );
}