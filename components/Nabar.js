import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import useTranslation from "next-translate/useTranslation";

import Link from "next/link";

const Nabar = () => {
  const router = useRouter();

  const { t } = useTranslation("common");

  const link1 = t("link1");
  const link1Href = t("link1Href");

  const link2 = t("link2");
  const link2Href = t("link2Href");

  return (
    <div className="w-full hidden">
      <div className="w-full max-w-screen-xl mx-auto">
        <nav className="w-full flex flex-wrap items-center justify-center space-x-12 font-bold text-my-text-color py-8">
          <Link
            href={link1Href}
            passHref
            scroll={false}
            className={`flex flex-col relative ${
              link1Href === router.pathname ? ` text-my-main-color` : ` `
            }`}
          >
            {link1}
            {link1Href === router.pathname && (
              <motion.div
                layoutId="navigation-underline"
                className="w-full border border-my-main-color"
              />
            )}
          </Link>
          <Link
            href={link2Href}
            passHref
            scroll={false}
            className={`flex flex-col relative  ${
              link2Href === router.pathname ? ` text-my-main-color` : ` `
            }`}
          >
            {link2}
            {link2Href === router.pathname && (
              <motion.div
                layoutId="navigation-underline"
                className="w-full border border-my-main-color "
              />
            )}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Nabar;
