function ArticlePage() {
  return (
    <>
      <h1 className="text-5xl text-balance font-bold">Article Title</h1>
      <p>Date: Date</p>
      <div className="grid grid-cols-2 gap-5 w-4/5">
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1745861707861-3fe218029ac4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Article Image"
        />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </div>
    </>
  );
}

export default ArticlePage;
