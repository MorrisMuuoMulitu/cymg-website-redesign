import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import LoadingSkeleton from '@/components/ui/LoadingSkeleton';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const HistoryMandate = lazy(() => import('@/pages/HistoryMandate'));
const PoliciesSafeguarding = lazy(() => import('@/pages/PoliciesSafeguarding'));
const Governance = lazy(() => import('@/pages/Governance'));
const UneaHub = lazy(() => import('@/pages/UneaHub'));
const WorkingGroupsHub = lazy(() => import('@/pages/WorkingGroupsHub'));
const WorkingGroupDetail = lazy(() => import('@/pages/WorkingGroupDetail'));
const Team = lazy(() => import('@/pages/Team'));
const Meas = lazy(() => import('@/pages/Meas'));
const Regions = lazy(() => import('@/pages/Regions'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Calendar = lazy(() => import('@/pages/Calendar'));
const Join = lazy(() => import('@/pages/Join'));
const Documents = lazy(() => import('@/pages/Documents'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSkeleton type="page" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/history-mandate" element={<HistoryMandate />} />
          <Route path="/about/policies-and-safeguarding" element={<PoliciesSafeguarding />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/unea-and-core-processes" element={<UneaHub />} />
          <Route path="/working-groups" element={<WorkingGroupsHub />} />
          <Route path="/working-groups/:slug" element={<WorkingGroupDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/meas" element={<Meas />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/join" element={<Join />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
