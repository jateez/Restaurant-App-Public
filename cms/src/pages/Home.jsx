import axios from "../config/axiosInstance";

export default function Home() {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
          <div className="flex flex-col gap-4 mb-4">
            <div className="overflow-x-auto">
              <table className="table flex w-full items-center justify-center min-h-24 rounded bg-gray-50">
                {/* head */}
                <thead className="bg-gray-50 hover:bg-gray-200 uppercase">
                  <tr>
                    <th className="px-6 py-3">ID</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">image URL</th>
                    <th className="px-6 py-3">Description</th>
                    <th className="px-6 py-3">Author ID</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4">1</td>
                    <td className="px-6 py-4">Cy Ganderton</td>
                    <td className="px-6 py-4">Quality Control Specialist</td>
                    <td className="px-6 py-4">Blue</td>
                    <td className="px-6 py-4">Blue</td>
                    <td className="px-6 py-4">Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4">2</td>
                    <td className="px-6 py-4">Hart Hagerty</td>
                    <td className="px-6 py-4">Desktop Support Technician</td>
                    <td className="px-6 py-4">Purple</td>
                    <td className="px-6 py-4">Purple</td>
                    <td className="px-6 py-4">Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4">3</td>
                    <td className="px-6 py-4">Brice Swyre</td>
                    <td className="px-6 py-4">Tax Accountant</td>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4">Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
