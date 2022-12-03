import { Button, Textarea, TextInput } from "@mantine/core"
import TopBar from "../../components/TopBar"

const SendMail = () => {
  return (
    <div>
        <TopBar pageName={"Send mail"} />
        <div className="send_mail_container">
            <TextInput size={"md"} placeholder="Subject" />
            <Textarea  size={"md"} mt={20} placeholder="Message.." />
            <Button mt={20} size={"md"} >Send</Button>
        </div>
    </div>
  )
}

export default SendMail