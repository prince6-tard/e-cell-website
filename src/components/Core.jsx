import React from 'react'
import linkedIn from '../assets/linkedin-icon-svgrepo-com.svg'
import instagram from '../assets/instagram-svgrepo-com.svg'
// Auto-import all member photos from assets (png/jpg/jpeg/webp/heic)
const imageModules = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,heic}', { eager: true })

// Exclude non-member images by filename
const EXCLUDED = new Set([
  'e-cell-logo.png',
  'inno.png',
  'innoo.png',
  'Mr.SudhanshRanjan.jpg',
])

const toTitleCase = (s) => s
  .replace(/[-_]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase()
  .replace(/\b\w/g, (c) => c.toUpperCase())

const roleByName = {
  'Aniket': 'Head of Administrations',
  'Anubhav': 'Head, Software',
  'Deepak': 'Head, Hardware',
  'Alok': 'Head, Startup & Services',
  'Priyanshu': 'Lead, Software',
  'Vidit Gaur': 'Head of Creative Designing',
  'Priya': 'Head, Operations Management',
  'Anushka': 'Project Manager',
  'Pushkar': 'Head, Corporate Relations',
  'Pushkar Goel': 'Head, Corporate Relations',
  
  'Ayush': 'Member, Startup & Services',
  'Ritesh': 'Member, Startup & Services',
  
  'Krishna': 'Lead, Hardware',
  
  'Diksha': 'Lead of Administrations',
  
  'Harshit': 'Lead of Creative Designing',
  
  'Bharti': 'Lead, Operations Management',
  'Vansh Tyagi': 'Head, PR Management',
  'Yogesh': 'Lead, PR Management',
  // Filename-based aliases
  'Tyagi': 'Head, PR Management',
  'Yoggesh': 'Lead, PR Management',
  
  
}

// Prefer certain formats when duplicates exist (e.g., priyanshu.png over priyanshu.webp)
const EXT_RANK = { png: 0, jpg: 1, jpeg: 1, webp: 2, heic: 3 }

const candidates = Object.entries(imageModules)
  .map(([path, mod]) => {
    const filename = path.split('/').pop() || ''
    if (!filename || EXCLUDED.has(filename)) return null
    const match = filename.match(/\.([^.]+)$/)
    const ext = match ? match[1].toLowerCase() : ''
    const base = filename.replace(/\.[^.]+$/, '')
    const name = toTitleCase(base)
    return {
      name,
      role: roleByName[name] || 'Member',
      img: mod.default || mod,
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      ext,
    }
  })
  .filter(Boolean)

const byName = new Map()
for (const c of candidates) {
  const existing = byName.get(c.name)
  if (!existing) {
    byName.set(c.name, c)
  } else {
    const existingRank = EXT_RANK[existing.ext] ?? 99
    const currentRank = EXT_RANK[c.ext] ?? 99
    if (currentRank < existingRank) byName.set(c.name, c)
  }
}

const members = Array.from(byName.values())
  .map(({ ext, ...rest }) => rest)
  .sort((a, b) => a.name.localeCompare(b.name))

// Helpers to extract department and role type
const getDepartmentFromRole = (role) => {
  if (!role) return null
  if (/^Head,\s*/i.test(role)) return role.replace(/^Head,\s*/i, '')
  if (/^Lead,\s*/i.test(role)) return role.replace(/^Lead,\s*/i, '')
  if (/Head of /i.test(role)) return role.replace(/.*Head of /i, '')
  if (/Lead of /i.test(role)) return role.replace(/.*Lead of /i, '')
  if (/PR Management/i.test(role)) return 'PR Management'
  if (/Operations Management/i.test(role)) return 'Operations Management'
  if (/Creative Designing/i.test(role)) return 'Creative Designing'
  if (/Startup & Services/i.test(role)) return 'Startup & Services'
  if (/Administrations/i.test(role)) return 'Administrations'
  if (/Hardware/i.test(role)) return 'Hardware'
  if (/Software/i.test(role)) return 'Software'
  return null
}

const getRoleType = (role) => {
  if (!role) return 'Member'
  if (/^Head(,| of|\b)/i.test(role)) return 'Head'
  if (/^Lead(,| of|\b)/i.test(role)) return 'Lead'
  return 'Member'
}

const enrichedMembers = members.map((m) => ({
  ...m,
  department: getDepartmentFromRole(m.role),
  roleType: getRoleType(m.role),
}))

// Desired department ordering
const departmentOrder = [
  'Software',
  'Startup & Services',
  'Hardware',
  'Administrations',
  'Creative Designing',
  'Operations Management',
  'PR Management',
  'Corporate Relations',
]

const Core = () => {
  // Build rows: each row for a department, Head first then Lead only
  const rows = departmentOrder.map((dep) => {
    const deptMembers = enrichedMembers.filter((m) => m.department === dep)
    const head = deptMembers.find((m) => m.roleType === 'Head')
    const lead = deptMembers.find((m) => m.roleType === 'Lead')
    if (dep === 'Startup & Services') {
      const extras = deptMembers.filter((m) => m.roleType === 'Member' && (m.name === 'Ritesh' || m.name === 'Ayush'))
      return [head, lead, ...extras].filter(Boolean)
    }
    return [head, lead].filter(Boolean)
  }).filter((row) => row.length > 0)

  return (
    <>
      <div className="mt-8 flex flex-col items-center">
        <h1 className='text-4xl font-bold text-[#FFCC00] mb-8'>Our Core Members</h1>

        <div className='w-full flex flex-col items-center gap-[20px]'>
          {rows.map((row, rIdx) => (
            <div key={rIdx} className='flex justify-center gap-[20px]'>
              {row.map((m, idx) => (
                <div key={`${rIdx}-${idx}`} className='group relative w-56 overflow-hidden rounded-3xl border-2 border-white/20 bg-white/5 backdrop-blur-sm'>
                  <img src={m.img} alt={m.name} className='block w-56 h-56 object-cover' />

                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40'>
                    <a href={m.instagram} target='_blank' rel='noreferrer' className='flex items-center justify-center w-10 h-10 rounded-md text-black shadow'>
                      <img src={instagram} alt="Instagram" className='w-5 h-5' />
                    </a>
                    <a href={m.linkedin} target='_blank' rel='noreferrer' className='flex items-center justify-center w-10 h-10 rounded-md  text-black shadow'>
                      <img src={linkedIn} alt="LinkedIn" className='w-5 h-5' />
                    </a>
                  </div>

                  <div className='p-3 text-center'>
                    <h3 className='text-white text-sm font-semibold tracking-wide'>{m.name}</h3>
                    <p className='text-[#08e0d6] text-xs'>{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Core                                                                           