const NotFound = () => {
  return (
    <>
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2>Sorry, we couldn't find that page</h2>
        <a
          href="/"
          style={{
            color: "#ddd",
            textDecoration: "none",
            backgroundColor: "#123456",
            padding: ".5rem",
            boxSizing: "border-box",
            borderRadius: "5px",
          }}
        >
          Back to Home
        </a>
      </main>
    </>
  );
};

export default NotFound;
