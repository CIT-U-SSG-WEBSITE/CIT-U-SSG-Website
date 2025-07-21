export default function OfficersLoading() {
  return (
    <div className="flex w-full h-fit min-h-screen bg-light-neutral p-6">
      <div className="flex-1 max-w-5xl mx-auto">
        <div className="h-10 bg-near-white rounded-md animate-pulse mb-6" />
        <div className="bg-near-white rounded-lg shadow-sm border border-light-neutral overflow-hidden">
          <table className="w-full">
            <thead className="border-b border-light-neutral">
              <tr>
                <th className="text-left py-3 px-6 font-sans text-sm font-medium text-[#171615]/80">
                  <i>Officer</i>
                </th>
                <th className="text-center py-3 px-6 font-sans text-sm font-medium text-[#171615]/80">
                  <i>Position</i>
                </th>
                <th className="text-right py-3 px-6 font-sans text-sm font-medium text-[#171615]/80">
                  <i>Committee</i>
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-maroon rounded-full animate-pulse" />
                      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="h-4 w-28 bg-gray-200 rounded animate-pulse ml-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
