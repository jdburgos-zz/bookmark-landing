const title = 'Pricing';

export default function Pricing() {
  return (
    <div>
      <h1>Pricing</h1>
    </div>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { title }
  };
}
