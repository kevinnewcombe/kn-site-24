import Link from "next/link";
import PageIntro from "@/components/organisms/pageintro/PageIntro";
export default async function Page() {
  return (
    <>
      <PageIntro title="Not Found">
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>
          <Link href="/"><strong>Back to homepage.</strong></Link>
        </p>
      </PageIntro>
    </>
  );
}
