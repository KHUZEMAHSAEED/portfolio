import Link from "next/link";
import { PROFILE } from "@/data/portfolioData";
import { IconArrowRight, IconDownload } from "@/components/Icons";

export const metadata = {
  title: "Page not found | Khuzemah Saeed",
};

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>This page doesn&apos;t exist.</h1>
        <p className="section-lead">
          The link may be old or mistyped. Everything about {PROFILE.name}&apos;s experience and work is one click away.
        </p>
        <div className="hero-ctas">
          <Link href="/" className="btn btn-primary btn-lg">
            Go to the homepage <IconArrowRight size={18} />
          </Link>
          <Link href="/projects" className="btn btn-secondary btn-lg">
            View case studies
          </Link>
          <a className="btn btn-ghost btn-lg" href={PROFILE.resume} download="Khuzemah_Saeed_Resume.pdf">
            <IconDownload size={18} /> Download CV
          </a>
        </div>
      </div>
    </main>
  );
}
