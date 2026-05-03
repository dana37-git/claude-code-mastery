import { skills } from '@/data/skills'

export default function SkillsTicker() {
  return (
    <div className="overflow-hidden bg-bg-surface border-y border-border-color py-4">
      <div className="flex animate-ticker whitespace-nowrap hover:[animation-play-state:paused]">
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 mx-8 text-text-secondary font-medium text-sm flex-shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
