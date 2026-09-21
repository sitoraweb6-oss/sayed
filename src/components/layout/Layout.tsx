import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollProgressBar from './ScrollProgressBar';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent/20">
      <ScrollProgressBar />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
