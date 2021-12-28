function timeComment() {
  return (

    // ******IDEA ******* ----> Maybe Checkboxes instead? As a Todo List Comma Seperated as Comment to timeTracking
    <div className="time-comment w-6/12 ">
      <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div>
              <label
                htmlFor="about"
                className="block text-sm pb-1 font-medium text-gray-700"
              >
                Kommentar
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-2 h-48 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Header Design Anpassungen, Button Alignment, Post-Funktionalität"
                  defaultValue={""}
                />
              </div>
              <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 mt-4 focus:ring-gray-500"
                  >
                    Save
                  </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default timeComment;
