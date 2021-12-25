const title = 'Features';

export default function Features() {
  return (
    <div>
      <h1>Features</h1>
    </div>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { title }
  };
}
