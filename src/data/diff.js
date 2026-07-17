export const diffHeading = {
  eyebrow: 'git diff — old_btech vs this_program',
  title: 'We rewrote the B.Tech. Line by line.',
  sub: "Most CSE programs still run on a 20-year-old syllabus. Here's exactly what we deleted — and what we shipped instead.",
  filename: 'btech_cse_curriculum.diff — 6 changes',
}

export const diffLines = [
  { type: 'ctx', gut: '@@', code: '// your_next_4_years' },
  { type: 'minus', gut: '−', code: 'memorize_theory(written_in_2004);' },
  { type: 'plus', gut: '+', code: 'code_2000_hours(real_projects); // 100% practical labs' },
  { type: 'minus', gut: '−', code: 'one_final_year_project.pdf' },
  { type: 'plus', gut: '+', code: 'ship(5_production_apps); // live users, real portfolio' },
  { type: 'minus', gut: '−', code: 'lab = whiteboard + dusty_desktops;' },
  { type: 'plus', gut: '+', code: 'lab = macbooks + nvidia_gpus + vision_pro;' },
  { type: 'minus', gut: '−', code: 'internship = maybe(final_year);' },
  { type: 'plus', gut: '+', code: 'internship = guaranteed(frontier_ai_company);' },
  { type: 'minus', gut: '−', code: 'meet_industry(semester_8);' },
  { type: 'plus', gut: '+', code: 'industry_bootcamps(from_semester_1);' },
  { type: 'minus', gut: '−', code: 'graduate_with(degree);' },
  { type: 'plus', gut: '+', code: 'graduate_with(degree + portfolio + global_3plus1_option);' },
]

// Plain-language pairing of the diff above, for readers who don't code yet —
// the code window is the differentiator, this is the translation.
export const diffPlainSummary = [
  { accent: 'violet', icon: 'BookX', old: 'Memorizing 20-year-old theory', next: '2000+ hours of real, hands-on coding' },
  { accent: 'sky', icon: 'FileText', old: 'One final-year project on paper', next: '5 production apps in your portfolio' },
  { accent: 'rose', icon: 'Laptop', old: 'Whiteboards & dusty desktops', next: 'MacBooks, NVIDIA GPUs & Vision Pro labs' },
  { accent: 'teal', icon: 'Briefcase', old: 'An internship "maybe" in year 4', next: 'A guaranteed internship, from day one' },
]
