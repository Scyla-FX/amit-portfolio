import { Navigate, useParams } from 'react-router-dom';
import { AppProjectPageLayout } from '../components/category/AppProjectPageLayout';
import { ErpProjectPageLayout } from '../components/category/ErpProjectPageLayout';
import { WebProjectPageLayout } from '../components/category/WebProjectPageLayout';
import { getAppProject } from '../data/appCategory';
import { getErpProject } from '../data/erpCategory';
import { getWebProject } from '../data/webCategory';

export function ErpCasePage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getErpProject(slug) : undefined;
  if (!project) return <Navigate to="/category/erp" replace />;
  return <ErpProjectPageLayout project={project} />;
}

export function AppCasePage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getAppProject(slug) : undefined;
  if (!project) return <Navigate to="/category/app" replace />;
  return <AppProjectPageLayout project={project} />;
}

export function WebCasePage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getWebProject(slug) : undefined;
  if (!project) return <Navigate to="/category/web-design" replace />;
  return <WebProjectPageLayout project={project} />;
}
