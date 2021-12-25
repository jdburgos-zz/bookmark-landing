const title = 'Contact';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { title }
  };
}
