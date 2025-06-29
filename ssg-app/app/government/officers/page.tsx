import React from 'react';

export default async function Page() {
  await new Promise((res) => setTimeout(res, 2000)); // simulate 2s delay
  return <h1>Hello, world!</h1>;
}