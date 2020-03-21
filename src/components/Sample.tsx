import React from 'react';

function Sample({
  loadingPost,
  loadingUsers,
  post,
  users,
}: any) {
  return (
    <div>
      <section>
        <h1>Post</h1>
        {loadingPost && 'loading...'}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>User list</h1>
        {loadingUsers && 'loading...'}
        {!loadingUsers && users && (
          <ul>
            {users.map((user: any) => (
              <li key={user.id}>
                {user.username}
                (
                {user.email}
                )
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Sample;
