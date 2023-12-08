import { TbToggleRight } from "react-icons/tb";

export default function UserTable() {
  return (
    <div className="bg-gray-300  text-gray-800 px-2 py-4">

    <table className="text-sm w-full ">
      <thead className="">
        <tr className="font-bold  ">
          <th>Sr No.</th>
          <th>Veriflow group</th>
          <th>Status</th>
         
        </tr>
      </thead>
      <tbody className="">
        <tr>
          <td>1</td>
          <td>ABC table</td>
          <td>Retain</td>
          <td className="text-xl">
            <TbToggleRight />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>vwx table</td>
          <td>Retain</td>
          <td className="text-xl">
            <TbToggleRight />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>XYZ table</td>
          <td>Retain</td>
          <td className="text-xl">
            <TbToggleRight />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>EFG table</td>
          <td>Retain</td>
          <td className="text-xl">
            <TbToggleRight />
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
