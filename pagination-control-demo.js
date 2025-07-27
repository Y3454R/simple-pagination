{totalPages > 1 && (
  <div className="flex justify-center items-center mt-4 space-x-1">
    <button
      onClick={() => paginate(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
    >
      Previous
    </button>

    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => {
      const isCurrent = number === currentPage;
      const showAlways =
        number === 1 || number === totalPages || Math.abs(currentPage - number) <= 1;

      if (showAlways) {
        return (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-3 py-1 rounded ${
              isCurrent
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {number}
          </button>
        );
      } else if (
        number === currentPage - 2 ||
        number === currentPage + 2
      ) {
        return (
          <span key={number} className="px-2 text-gray-500">
            ...
          </span>
        );
      }

      return null;
    })}

    <button
      onClick={() => paginate(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
)}
