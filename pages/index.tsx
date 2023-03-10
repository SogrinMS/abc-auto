import Head from 'next/head';

import HelloWorld from '../src/components/HelloWorld';

const Home = () => {
  return (
    <>
      <Head>
        <title>ABC Auto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <HelloWorld />
    </>
  );
};

export default Home;
