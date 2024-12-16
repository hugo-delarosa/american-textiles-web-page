import ContactForm from "@/app/ui/general/contact_form";
import Header from "@/app/ui/general/header";
import {fetchNavigation, logo} from "@/app/lib/data";

export default async function Page() {
  const [navigation] = await Promise.all([
    fetchNavigation(),
  ]);
  return (
    <><Header logo={logo} navigation={navigation}/><ContactForm/></>
  );
}