export default function Head({ title, metaDescription }) {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={metaDescription} />
    </>
  );
}
