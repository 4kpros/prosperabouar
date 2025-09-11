import Image from "next/legacy/image";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectItem = ({ index, openModal }) => {
  const { t } = useTranslation("common");

  const visitProject = t("visitProject");
  const moreDetails = t("moreDetails");

  function onOpenModal() {
    openModal(index);
  }

  return (
    <motion.div
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      initial={{ scale: 1, boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.1)" }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 1.02 }}
      className="w-full h-max group"
    >
      <Image
        width={300}
        height={170}
        quality={75}
        placeholder="blur"
        blurDataURL={t("projectsList." + index + ".blur")}
        src={t("projectsList." + index + ".cover_art_small")}
        alt={t("projectsList." + index + ".name")}
        className="w-full h-52 bg-black/10 object-cover object-top shadow-md saturate-0 group-hover:saturate-100 transition-all"
      />
      <div className="w-full flex flex-col p-4 text-sm">
        <div className="w-full">
          <p className="truncate ... text-my-text-color font-bold">
            {t("projectsList." + index + ".name")
              ? `${t("projectsList." + index + ".name")} 
                                (
                                    ${t("projectsList." + index + ".type")} 
                                )
                                `
              : ``}
          </p>
        </div>
        <div className="w-full">
          <p className="truncate ... w-auto opacity-70">
            {t("projectsList." + index + ".tools")}
          </p>
        </div>
        <div className="truncate ... w-full opacity-50 mt-4 ">
          {t("projectsList." + index + ".content")}
        </div>
        <div className="w-full flex flex-wrap mt-2">
          <button
            type="button"
            onClick={() => onOpenModal()}
            className="truncate ... underline hover:text-my-main-color mr-4"
          >
            {moreDetails}
          </button>
          <Link
            href={
              t("projectsList." + index + ".link")
                ? t("projectsList." + index + ".link")
                : "#"
            }
            target="_blank"
            rel="noreferrer"
            className="w-auto hidden truncate ... underline hover:text-my-main-color mr-4"
          >
            {t("projectsList." + index + ".link") ? `${visitProject}` : ``}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
