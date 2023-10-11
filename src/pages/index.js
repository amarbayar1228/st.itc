import Head from "next/head";
import Breadcrumb from "@/components/breadcrumb";
import ProjectComp from "@/components/project";
import Programm from "@/components/programm";
import News from "@/components/news";
import Iso from "@/components/iso";
import Footer from "@/components/footer";
import SimpleMotion from "@/components/assist/simpleMotion";

export default function Home() {
  return (
    <main>
      <Head>
        <title>ГТСМТТ</title>
        <meta name="page" content="Тавтай морилно уу." key="desc" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="theme-color" content="#317EFB" />
        <meta name="Googlebot" content="noindex" />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        <link rel="icon" href="/images/brand/itc.svg" />
      </Head>
      <section>
        <SimpleMotion>
          <Breadcrumb name="цэс" router={""} />
        </SimpleMotion>
        <SimpleMotion>
          <ProjectComp />{" "}
        </SimpleMotion>
        <SimpleMotion>
          <Programm />
        </SimpleMotion>
        <SimpleMotion>
          <News />
        </SimpleMotion>
        <SimpleMotion>
          <Iso />
        </SimpleMotion>
        <SimpleMotion>
          <Footer />
        </SimpleMotion>
      </section>
    </main>
  );
}
