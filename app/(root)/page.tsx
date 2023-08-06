import { ThreadCard } from '@/components/cards/ThreadCard';
import { fetchPosts } from '@/lib/actions/thread.action';
import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  const results = await fetchPosts(1, 30);
  const user = await currentUser();
  return (
    <div>
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {results.posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {results.posts.map((thread) => (
              <ThreadCard
                key={thread._id}
                id={thread._id}
                currentUserId={user?.id || ''}
                parentId={thread.parentId}
                content={thread.text}
                author={thread.author}
                community={thread.community}
                createdAt={thread.createdAt}
                comments={thread.children}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
}
