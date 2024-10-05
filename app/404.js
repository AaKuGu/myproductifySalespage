// app/404.js
const Custom404 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-200 to-blue-300 text-center">
      <div>
        <h1 className="text-6xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-6">
          Oops! Looks like you took a wrong turn. 🚧
        </p>
        <img
          src="https://media.giphy.com/media/3o7buhr21xXnULqwnC/giphy.gif" // A funny image or GIF
          alt="Lost"
          className="mx-auto mb-4"
          width={300} // Adjust width as necessary
        />
        <p className="text-lg">
          This page is like a unicorn – it doesn’t exist! 🦄
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Custom404;
