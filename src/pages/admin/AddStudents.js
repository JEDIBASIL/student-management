import { Button, Image, Radio, Select, TextInput } from "@mantine/core"
import TopBar from "../../components/admin/TopBar"
import {GiClick} from "react-icons/gi"

const AddStudents = () => {
    return (
        <div>
            <TopBar pageName={"Add student"} />
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
                    <div className="input_fields">
                        <div className="grid_2">
                            <TextInput size={"md"} label={"City"} placeholder={"Enter city"} />
                            <TextInput size={"md"} label={"State"} placeholder={"Enter state"} />
                        </div>
                        <div className="grid_2">
                            <TextInput size={"md"} label={"Street"} placeholder={"Enter street"} />
                        </div>
                    </div>
                    <Button size={"md"}>Submit</Button>
                </div>
                <div className="image_upload">
                <Image 
                    // src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
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
    )
}

export default AddStudents