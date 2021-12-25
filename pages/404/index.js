const title = 'Not Found';

export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  )
}


export async function getStaticProps(ctx) {
  return {
    props: { title }
  };
}
