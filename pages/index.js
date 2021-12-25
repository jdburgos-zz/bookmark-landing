const title = 'Home';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { title }
  };
}
