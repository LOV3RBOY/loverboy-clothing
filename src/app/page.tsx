import ClientBody from './ClientBody';

// Force dynamic rendering due to live clock and client interactions
export const dynamic = 'force-dynamic';

export default function Home() {
  return <ClientBody />;
}
