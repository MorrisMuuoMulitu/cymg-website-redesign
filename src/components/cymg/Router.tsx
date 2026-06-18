import { useCallback, createContext, useContext, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export type PageName = 'home' | 'about' | 'working-groups' | 'unea' | 'regions' | 'blog' | 'team' | 'documents' | 'join' | 'contact'

interface RouterContextType {
  currentPage: PageName
  navigate: (page: PageName) => void
}

const RouterContext = createContext<RouterContextType>({
  currentPage: 'home',
  navigate: () => {},
})

export function useRouter() {
  return useContext(RouterContext)
}

const PAGE_TO_PATH: Record<PageName, string> = {
  home: '/',
  about: '/about',
  'working-groups': '/working-groups',
  unea: '/unea-and-core-processes',
  regions: '/regions',
  blog: '/blog',
  team: '/team',
  documents: '/documents',
  join: '/join',
  contact: '/contact',
}

const PATH_TO_PAGE: Record<string, PageName> = {
  '/': 'home',
  '/about': 'about',
  '/working-groups': 'working-groups',
  '/unea-and-core-processes': 'unea',
  '/regions': 'regions',
  '/blog': 'blog',
  '/team': 'team',
  '/documents': 'documents',
  '/join': 'join',
  '/contact': 'contact',
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()

  const currentPage = useMemo(() => {
    const path = location.pathname
    return PATH_TO_PAGE[path] || 'home'
  }, [location.pathname])

  const handleNavigate = useCallback((page: PageName) => {
    const path = PAGE_TO_PATH[page]
    if (path) {
      navigate(path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [navigate])

  return (
    <RouterContext.Provider value={{ currentPage, navigate: handleNavigate }}>
      {children}
    </RouterContext.Provider>
  )
}
