import { Select, TextInput } from "@mantine/core"

const AddressForm = () => {
  return (
    <div className="input_fields">
      <div className="grid_2">
        <TextInput size={"md"} label={"City"} placeholder={"Enter city"} />
        <TextInput size={"md"} label={"State"} placeholder={"Enter state"} />
      </div>
      <div className="grid_2">
        <TextInput size={"md"} label={"Street"} placeholder={"Enter street"} />
        <Select placeholder="Select address type" label={"Address type"} data={["SCHOOL", "HOME"]} />
      </div>
    </div>)
}

export default AddressForm