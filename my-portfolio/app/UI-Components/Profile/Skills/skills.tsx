'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'

const skillGroups = [
  {
    title: 'Featured',
    items: ['Data Science', 'GIS', 'Python', 'JavaScript', 'Machine Learning', 'SQL', 'Power BI', 'React', 'HTML', 'CSS']
  },
  {
    title: 'Data Science',
    items: ['Python', 'Machine Learning', 'Data Analysis', 'Predictive Modelling', 'Data Visualization', 'Statistics', 'AI', 'SQL']
  },
  {
    title: 'GIS & Spatial',
    items: ['ArcGIS', 'QGIS', 'GeoJSON', 'Spatial Analysis', 'Remote Sensing', 'Geospatial Data', 'Mapping']
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'SASS', 'HTML', 'CSS']
  },
  {
    title: 'Backend & Tools',
    items: ['Node.js', 'Express', 'Fastify', 'Appwrite', 'Prisma', 'Git', 'REST APIs']
  }
]

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-[8%] lg:px-[16%] pt-16 pb-10" style={{ background: 'transparent' }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h1
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #b7b1ff 45%, #4fe2ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Skills
          </h1>
        </div>

        <div className="space-y-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1 }}
              className="space-y-4"
            >
              <h2
                className="text-lg font-medium"
                style={{
                  color: '#dfe9ff',
                  opacity: 0.9,
                }}
              >
                {group.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center rounded-xl border px-4 py-2 min-h-[42px]"
                    style={{
                      background: 'rgba(20, 15, 37, 0.82)',
                      borderColor: 'rgba(255,255,255,0.12)',
                      color: '#f5f7ff',
                      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)',
                    }}
                  >
                    <span
                      style={{
                        background: 'linear-gradient(90deg, #ffffff 0%, #b7b1ff 45%, #4fe2ff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: 700,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 pb-4">
          <Link
            href="/UI-Components/Profile/Education"
            className="px-5 py-2 border rounded-lg"
            style={{
              borderColor: 'rgba(255,255,255,0.14)',
              color: '#f4f7ff',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            View Education
          </Link>
          <Link
            href="/UI-Components/Profile/Certifications"
            className="px-5 py-2 border rounded-lg"
            style={{
              borderColor: 'rgba(255,255,255,0.14)',
              color: '#f4f7ff',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            View Certifications
          </Link>
        </div>
      </div>
      </main>
      <Footer />
    </>
  )
}
