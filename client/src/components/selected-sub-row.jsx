const SelectedSubRow = ({ sub }) => {
    const { teachers, name, credits, slot } = sub;
    return (
        <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">{name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{credits}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{teachers}</td>
            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">{slot}</button>
            </td>
        </tr>
    )
}
export default SelectedSubRow;