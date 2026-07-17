import { teamHeading, team } from '../data/team'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { accentAt, hexToRgba } from '../lib/colors'

export default function Team() {
  return (
    <section id="team" className="bg-paper text-textdark py-[84px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          onLight
          eyebrow={teamHeading.eyebrow}
          title={teamHeading.title}
          sub={teamHeading.sub}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-11">
          {team.map((member, i) => {
            const color = accentAt(i)
            return (
              <Reveal
                key={member.name}
                delay={i * 0.1}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  borderColor: color,
                  boxShadow: `0 14px 30px -10px ${hexToRgba(color, 0.45)}`,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-white border-[1.5px] border-textdark/10 rounded-brand p-6 text-center cursor-pointer transition-colors duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-white overflow-hidden p-2"
                  style={{ boxShadow: `0 0 0 2px ${hexToRgba(color, 0.4)}` }}
                >
                  <img 
                    src={member.logo} 
                    alt={member.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <b className="block text-[0.95rem]">{member.name}</b>
                <span
                  className="font-mono text-[0.66rem] tracking-wide uppercase"
                  style={{ color }}
                >
                  {member.role}
                </span>
                <p className="text-[0.78rem] text-muted-light mt-2">{member.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
