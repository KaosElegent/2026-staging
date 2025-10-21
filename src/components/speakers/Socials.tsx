import { Speaker } from "@/lib/interface";
import Image from "next/image";

export default function Socials({
  speaker,
  variant = "light",
}: {
  speaker: Speaker;
  variant?: "light" | "dark";
}) {
  // Returns the social media icons for a speaker's social links
  // for a given social key (eg. "instagram") the image is at "/public/icons/{key}.svg"
  // variant can be "light" (default) or "dark" to control icon color theme

  return (
    <div className="flex gap-4 mt-4">
      {speaker.socials &&
        Object.entries(speaker.socials).map(([key, url]) => (
          <a
            key={key}
            href={url || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`/icons/${variant === "dark" ? `${key}-dark` : key}.svg`}
              alt={`${speaker.name} ${key}`}
              width={24}
              height={24}
              className="hover:opacity-70 transition-opacity duration-300"
            />
          </a>
        ))}
    </div>
  );
}
