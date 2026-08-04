import { useState, useEffect } from 'react';
import { GitCommit, GitPullRequest, GitMerge, Star, Code, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function GithubActivity() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = import.meta.env.VITE_GITHUB_USERNAME || 'torvalds'; // Fallback for demo

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        // Simple session storage caching to prevent rate limiting during dev
        const cacheKey = `gh_activity_${username}`;
        const cached = sessionStorage.getItem(cacheKey);
        
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 1000 * 60 * 5) { // 5 min cache
            setEvents(data);
            setLoading(false);
            return;
          }
        }

        const res = await fetch(`https://api.github.com/users/${username}/events/public?per_page=15`);
        
        if (!res.ok) throw new Error('Failed to fetch GitHub activity');
        
        const data = await res.json();
        
        // Filter for meaningful events and take top 4
        const filteredEvents = data
          .filter(e => ['PushEvent', 'PullRequestEvent', 'WatchEvent', 'CreateEvent'].includes(e.type))
          .slice(0, 4);

        sessionStorage.setItem(cacheKey, JSON.stringify({ data: filteredEvents, timestamp: Date.now() }));
        
        setEvents(filteredEvents);
      } catch (err) {
        console.error(err);
        setError('Unable to load recent activity.');
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [username]);

  const getEventIcon = (type) => {
    switch (type) {
      case 'PushEvent': return <GitCommit size={16} className="text-[var(--text-color)]" />;
      case 'PullRequestEvent': return <GitPullRequest size={16} className="text-[var(--success)]" />;
      case 'WatchEvent': return <Star size={16} className="text-yellow-500" />;
      case 'CreateEvent': return <Code size={16} className="text-accent" />;
      default: return <GitCommit size={16} />;
    }
  };

  const formatEventMessage = (event) => {
    switch (event.type) {
      case 'PushEvent':
        return `Pushed ${event.payload.commits?.length || 1} commit(s) to`;
      case 'PullRequestEvent':
        return `${event.payload.action === 'opened' ? 'Opened' : 'Merged'} PR in`;
      case 'WatchEvent':
        return `Starred`;
      case 'CreateEvent':
        return `Created repository`;
      default:
        return `Activity in`;
    }
  };

  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // in seconds

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  return (
    <div className="bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <Code size={20} className="text-accent" />
          Recent Activity
        </h3>
        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-[var(--text-muted)] hover:text-accent transition-colors"
        >
          @{username}
        </a>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="animate-spin text-[var(--text-muted)]" size={24} />
        </div>
      ) : error ? (
        <div className="text-sm text-[var(--error)] py-4 text-center">{error}</div>
      ) : events.length === 0 ? (
        <div className="text-sm text-[var(--text-muted)] py-4 text-center">No recent public activity.</div>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              key={event.id} 
              className="flex items-start gap-3 text-sm"
            >
              <div className="mt-1 w-6 h-6 rounded-full bg-[var(--border-color)] flex items-center justify-center shrink-0">
                {getEventIcon(event.type)}
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[var(--text-color)] truncate">
                  <span className="text-[var(--text-muted)]">{formatEventMessage(event)}</span>{' '}
                  <a 
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-accent transition-colors hover:underline"
                  >
                    {event.repo.name}
                  </a>
                </p>
                {event.type === 'PushEvent' && event.payload.commits?.[0]?.message && (
                  <p className="text-[var(--text-muted)] truncate mt-0.5 max-w-full">
                    "{event.payload.commits[0].message}"
                  </p>
                )}
                <span className="text-xs text-[var(--text-muted)] block mt-1">{timeAgo(event.created_at)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
