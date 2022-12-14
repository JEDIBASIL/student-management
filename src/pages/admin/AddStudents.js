import { Button, Image, Radio, Select, TextInput } from "@mantine/core"
import TopBar from "../../components/admin/TopBar"
import { GiClick } from "react-icons/gi"
import AddressForm from "../../components/admin/AddressForm"

const AddStudents = () => {
    return (
        <div>
            <TopBar pageName={"Add student"} />
            <div className="app_container">
                <form className="add_student_form">
                    <div>
                        <div className="input_fields">
                            <div className="grid_2">
                                <TextInput size={"md"} label={"First name"} placeholder={"Enter first name"} />
                                <TextInput size={"md"} label={"Last name"} placeholder={"Enter last name"} />
                            </div>
                            <div className="grid_2">
                                <Select size={"md"} label={"Department"} placeholder={"Select department"} data={["COMPUTER SCIENCE"]} />
                                <Select size={"md"} label={"Level"} placeholder={"Select level"} data={["100", "200", "300", "400", "500"]} />
                            </div>

                            <div>
                                <Radio.Group
                                    name="gender"
                                    label="Select gender"
                                >
                                    <Radio value="male" label="male" />
                                    <Radio value="female" label="female" />
                                </Radio.Group>
                            </div>
                        </div>
                        <AddressForm />
                        <Button size={"md"}>Submit</Button>
                    </div>
                    <div className="image_upload">
                        <Image
                            radius={"md"}
                        />
                        <div className="image_upload_overlay">
                            <GiClick />
                            <p>Click to add image / drag and drop</p>
                            <input type="file" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddStudents