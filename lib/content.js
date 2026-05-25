import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentRoot = path.join(process.cwd(), 'content')

// ─── Markdown helpers ─────────────────────────────────────────────────────────

export async function markdownToHtml(markdown) {
  const result = await remark().use(html, { sanitize: false }).process(markdown)
  return result.toString()
}

function parseSlug(filename) {
  return filename.replace(/\.md$/, '')
}

// ─── Generic collection reader ────────────────────────────────────────────────

function getCollection(collection) {
  const dir = path.join(contentRoot, collection)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), 'utf8')
      const { data, content } = matter(raw)
      const serialized = Object.fromEntries(
        Object.entries(data).map(([k, v]) => [k, v instanceof Date ? v.toISOString() : v])
      )
      return { slug: parseSlug(filename), ...serialized, _content: content }
    })
    .sort((a, b) => {
      // Sort by date descending if available
      if (a.date && b.date) return new Date(b.date) - new Date(a.date)
      return 0
    })
}

function getCollectionItem(collection, slug) {
  const dir = path.join(contentRoot, collection)
  if (!fs.existsSync(dir)) return null
  const file = fs.readdirSync(dir).find((f) => f.replace(/\.md$/, '') === slug)
  if (!file) return null
  const raw = fs.readFileSync(path.join(dir, file), 'utf8')
  const { data, content } = matter(raw)
  const serialized = Object.fromEntries(
    Object.entries(data).map(([k, v]) => [k, v instanceof Date ? v.toISOString() : v])
  )
  return { slug, ...serialized, _content: content }
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export function getAllProjects() {
  return getCollection('projects').filter((p) => !p.draft)
}

export function getFeaturedProjects() {
  return getAllProjects().filter((p) => p.featured).slice(0, 6)
}

export async function getProject(slug) {
  const item = getCollectionItem('projects', slug)
  if (!item) return null
  return { ...item, contentHtml: await markdownToHtml(item._content || '') }
}

export function getProjectSlugs() {
  const dir = path.join(contentRoot, 'projects')
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map(parseSlug)
}

// ─── Services ─────────────────────────────────────────────────────────────────

export function getAllServices() {
  return getCollection('services')
    .filter((s) => !s.draft)
    .sort((a, b) => (a.order || 10) - (b.order || 10))
}

export async function getService(slug) {
  const item = getCollectionItem('services', slug)
  if (!item) return null
  return { ...item, contentHtml: await markdownToHtml(item._content || '') }
}

// ─── Clients ──────────────────────────────────────────────────────────────────

export function getAllClients() {
  return getCollection('clients')
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export function getAllTestimonials() {
  return getCollection('testimonials')
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export function getAllPosts() {
  return getCollection('blog').filter((p) => !p.draft)
}

export async function getPost(slug) {
  const item = getCollectionItem('blog', slug)
  if (!item) return null
  return { ...item, contentHtml: await markdownToHtml(item._content || '') }
}

export function getPostSlugs() {
  const dir = path.join(contentRoot, 'blog')
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map(parseSlug)
}

// ─── Settings ─────────────────────────────────────────────────────────────────

export function getSiteSettings() {
  const file = path.join(contentRoot, 'settings', 'general.json')
  if (!fs.existsSync(file)) return {}
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

export function getHomepageSettings() {
  const file = path.join(contentRoot, 'settings', 'homepage.json')
  if (!fs.existsSync(file)) return {}
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}
