import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SampleComponent from '@/components/Sample';
import { getPost, getUsers } from '@/modules/sample';
import { Sample } from '@/common/type';

function SampleContainer({
  getPostConnect,
  getUsersConnect,
  post,
  users,
  loadingPost,
  loadingUsers,
}: any) {
  useEffect(() => {
    getPostConnect(1);
    getUsersConnect(1);
  }, [getPostConnect, getUsersConnect]);
  return (
    <SampleComponent
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUser={loadingUsers}
    />
  );
}

export default connect(
  ({ sample }: Sample) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS,
  }),
  {
    getPostConnect: getPost,
    getUsersConnect: getUsers,
  },
)(SampleContainer);
