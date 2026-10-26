import { FAQ as ITEMS, PROFILE } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";
import { IconChat, IconChevronDown } from "./Icons";

export default function FAQ({ onOpenAssistant }) {
  const items = [
    ...ITEMS,
    PROFILE.noticePeriod && {
      q: "What's your notice period?",
      a: `${PROFILE.noticePeriod}.`,
    },
    PROFILE.employmentType && {
      q: "Full-time or contract?",
      a: `${PROFILE.employmentType} — both work for me.${PROFILE.relocation ? ` ${PROFILE.relocation}, no relocation.` : ""}`,
    },
  ].filter(Boolean);

  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="wrap faq-layout">
        <SectionHeading
          id="faq-title"
          eyebrow="For recruiters"
          title="Quick answers"
          lead="The questions I usually get on a first call."
        />
        <div>
          <div className="faq-list">
            {items.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>
                  <span>{item.q}</span>
                  <IconChevronDown size={18} />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <button type="button" className="text-link faq-more" onClick={onOpenAssistant}>
            <IconChat size={16} /> Ask about a specific project or skill
          </button>
        </div>
      </div>
    </section>
  );
}
