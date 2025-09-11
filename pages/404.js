import Link from "next/link";
import Image from "next/legacy/image";
import useTranslation from "next-translate/useTranslation";

import Layout from "../components/Layout";

export default function Custom404() {
  const { t } = useTranslation("404");

  const pageTile = t("pageTile");
  const pageDescription = t("pageDescription");

  const error = t("error");
  const errorMessage = t("errorMessage");
  const homePage = t("homePage");

  return (
    <Layout title={pageTile} description={pageDescription}>
      <div className="w-full text-my-text-color">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-full h-screen flex items-center justify-center">
            <div className="w-auto flex flex-col items-center m-auto">
              <div className="w-128 h-128">
                <Image
                  width={128}
                  height={128}
                  placeholder="blur"
                  blurDataURL="/images/svg/alerts/warn.webp"
                  src="/images/svg/alerts/warn.webp"
                  alt="404-img"
                  className="object-contain"
                />
              </div>
              <h3 className="text-center font-semibold">{error}</h3>
              <p className="text-center text-my-text-color opacity-50 mt-2">
                {errorMessage}
              </p>
              <div className="mt-6">
                <Link
                  href={"/"}
                  className="w-auto text-white text-center bg-black/50 px-6 py-2 hover:shadow-lg hover:bg-black/70 transition-all"
                >
                  {homePage}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
