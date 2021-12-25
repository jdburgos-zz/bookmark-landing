const title = 'Login';

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { title }
  };
}
