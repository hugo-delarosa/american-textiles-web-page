import Header from "@/app/ui/general/header";
import {fetchNavigation, iso_logo} from "@/app/lib/data";
  export default async function Layout({ children }: { children: React.ReactNode }) {
  const navigation = await fetchNavigation();

  return (
    <div>
      <Header
        logo={iso_logo}
        navigation={navigation}
      />
      {children}
    </div>
  );
}