const title = 'Admin';

export default function Admin() {
  return (
    <div>
      <h1>Admin</h1>
    </div>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { title }
  };
}
