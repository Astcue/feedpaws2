// src/components/VolunteerOfYear.jsx
import React from "react";

const defaultWinner = {
  name: "Aarti Sharma",
  photo: "/images/volunteer-of-year/aarti.jpg",
  year: 2025,
  bio: "Aarti led community feeding programs across 7 locations, recruited 120 volunteers, and introduced the nightly checklist which improved reliability by 40%.",
  achievements: [
    "Led 120 volunteers",
    "Introduced the nightly checklist",
    "Organized 24 weekend drives",
  ],
};

export default function VolunteerOfYear({ winner = defaultWinner, others = [], showYear = false }) {
  return (
    <section
      className="p-8 border rounded-2xl bg-card border-border shadow-card md:p-10"
      aria-labelledby="voy-heading"
    >
      <h2 id="voy-heading" className="mb-6 font-serif text-xl text-center text-foreground md:text-2xl">
        Volunteer of the Year{showYear ? ` — ${winner.year}` : ""}
      </h2>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <img
          src={winner.photo}
          alt={`Photo of ${winner.name}`}
          loading="lazy"
          className="object-cover border w-36 h-36 rounded-xl border-border shrink-0"
        />

        <div className="flex-1 text-center sm:text-left">
          <h3 className="mb-2 font-serif text-lg text-foreground">{winner.name}</h3>
          <p className="leading-relaxed text-muted-foreground">{winner.bio}</p>

          {winner.achievements && winner.achievements.length > 0 && (
            <ul className="mt-4 space-y-1.5 text-left" aria-label="Key achievements">
              {winner.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {others.length > 0 && (
        <div className="pt-6 mt-8 border-t border-border">
          <h4 className="mb-4 text-sm font-semibold text-foreground">Past winners</h4>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {others.map((o) => (
              <div key={o.name} className="flex items-center gap-2 p-2 border rounded-xl border-border">
                <img src={o.photo} alt={o.name} loading="lazy" className="object-cover w-12 h-12 rounded-lg" />
                <div>
                  <div className="text-sm font-medium text-foreground">{o.name}</div>
                  <div className="text-xs text-muted-foreground">{o.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
